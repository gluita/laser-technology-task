from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/submit", methods=["POST"])
def submit():
    # Get form data
    print(request.form)
    print(request.form.get("name"))
    print(request.form.get("email"))
    print(request.form.get("contact"))
    print(request.form.get("message"))
    print(request.form.get("org-name"))

    return "submmited"
    # name = request.get("name")
    # email = request.get("email")
    # contact = request.get("contact")
    # message = request.get("message")

    # print(name)
    # # print("Email:" + str(email))
    # # print("Phone:" + str(contact))
    # # print("Message:" + str(message))

    # # Simple validation (you can add more complex validation as needed)
    # if not name or not email or not contact or not message:
    #     error_message = "All fields are required."
    #     return render_template("index.html", error_message=error_message)

    # # If validation passes, you can process the form data further
    # # For demonstration, let's just print the data
    # print("Name:", name)
    # print("Email:", email)
    # print("Phone:", contact)
    # print("Message:", message)

    # # Redirect to a success page after form submission


if __name__ == "__main__":
    app.run(debug=True)
