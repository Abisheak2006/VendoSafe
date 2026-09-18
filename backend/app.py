from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


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