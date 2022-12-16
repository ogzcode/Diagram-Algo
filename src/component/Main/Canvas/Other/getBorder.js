function getBorder(shapeType) {
    let borders = {
        "state": "#13b913",
        "loop": "#5555df",
        "loop&state": "#000000"
    };

    return {"color": borders[shapeType], "width": 4};
}

export default getBorder;