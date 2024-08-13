from flask import Flask, render_template
from faker import Faker
from json import dumps


app = Flask(__name__)
fake = Faker()

def get_fake_user():
    return {
        'name': fake.name(),
        'email': fake.email(),
        'phone': fake.phone_number(),
        'address': fake.address().replace('\n', ', '),
        'created_at': fake.date_time_this_century().isoformat()
    }

@app.route('/')
def index():
    users = [get_fake_user() for _ in range(100)]
    return render_template('basic-table.html', users=dumps(users))

@app.route('/default')
def default():
    users = [get_fake_user() for _ in range(100)]
    return render_template('default-table.html', users=dumps(users))


if __name__ == '__main__':
    app.run(debug=True)