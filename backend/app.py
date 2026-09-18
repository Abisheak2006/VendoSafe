from flask import Flask, jsonify

app = Flask(__name__)


@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type,Authorization"
    response.headers["Access-Control-Allow-Methods"] = "GET,POST,PUT,PATCH,DELETE,OPTIONS"
    return response


@app.route("/")
def home():
    return jsonify({
        "message": "VendoSafe Backend is Running!"
    })


@app.route("/api/test")
def test():
    return jsonify({
        "status": "success",
        "message": "VendoSafe API is working"
    })


if __name__ == "__main__":
    app.run(debug=True)