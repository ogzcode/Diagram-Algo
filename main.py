from flask import Flask, render_template, request
from faker import Faker
from json import dumps


app = Flask(__name__)
fake = Faker()


def get_fake_user():
    return {
        'id': fake.uuid4(),
        'name': fake.name(),
        'email': fake.email(),
        'phone': fake.phone_number(),
        'address': fake.address().replace('\n', ', '),
        'created_at': fake.date_time_this_century().isoformat()
    }


users = [get_fake_user() for _ in range(100)]


@app.route('/')
def index():
    return render_template('basic-table.html', users=dumps(users))


@app.route('/default')
def default():
    return render_template('default-table.html', users=dumps(users))


@app.route('/server')
def server():
    return render_template('server-table.html')


@app.route('/api/data')
def api_data():
    try:
        search = request.args.get('search')
        sort = request.args.get('sort', 'name')
        direction = request.args.get('dir', 'asc')
        start = request.args.get('start', type=int, default=0)
        length = request.args.get('length', type=int, default=10)

        filtered_users = users  

        # Search functionality
        if search != 'undefined' and search:
            search = search.lower()
            filtered_users = [
                user for user in users
                if search in user['name'].lower() or
                search in user['email'].lower() or
                search in user['phone'].lower() or
                search in user['address'].lower()
            ]

        # Sorting functionality
        if sort != 'undefined' and sort != '':
            sort_key = sort.lower()
            reverse = direction == 'desc'
            filtered_users.sort(key=lambda x: x[sort_key], reverse=reverse)

        # Pagination functionality
        paginated_users = filtered_users[start:start + length]

        return {
            'data': paginated_users,
            'total': len(filtered_users)
        }

    except Exception as e:
        print(e)
        return {'error': str(e)}


if __name__ == '__main__':
    app.run(debug=True)
