from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

sample_data = {
  "employees": [
    {
      "employee_id": 1,
      "name": "Atif Hussain",
      "position": "Data Analyst",
      "salary": 75000
    },
    {
      "employee_id": 2,
      "name": "Somitav Mishra",
      "position": "Business Analyst",
      "salary": 65000
    },
    {
      "employee_id": 3,
      "name": "Bob Johnson",
      "position": "Project Manager",
      "salary": 85000
    },
    {
      "employee_id": 4,
      "name": "John Doe",
      "position": "Software Engineer",
      "salary": 70000
    },
    {
      "employee_id": 5,
      "name": "Michael Brown",
      "position": "Quality Assurance Engineer",
      "salary": 72000
    },
    {
      "employee_id": 6,
      "name": "Jane Smith",
      "position": "UI/UX Designer",
      "salary": 78000
    },
    {
      "employee_id": 7,
      "name": "Chris Miller",
      "position": "Systems Administrator",
      "salary": 68000
    },
    {
      "employee_id": 8,
      "name": "Megan Wilson",
      "position": "Marketing Specialist",
      "salary": 60000
    },
    {
      "employee_id": 9,
      "name": "Kevin Lee",
      "position": "Network Engineer",
      "salary": 82000
    },
    {
      "employee_id": 10,
      "name": "Sara Martinez",
      "position": "Financial Analyst",
      "salary": 75000
    },
    {
      "employee_id": 11,
      "name": "Daniel Taylor",
      "position": "Product Manager",
      "salary": 88000
    },
    {
      "employee_id": 12,
      "name": "Laura Hall",
      "position": "Human Resources Specialist",
      "salary": 65000
    },
    {
      "employee_id": 13,
      "name": "Alex Turner",
      "position": "IT Support Technician",
      "salary": 62000
    },
    {
      "employee_id": 14,
      "name": "Grace Adams",
      "position": "Customer Support Representative",
      "salary": 58000
    },
    {
      "employee_id": 15,
      "name": "Jordan White",
      "position": "Sales Executive",
      "salary": 70000
    },
    {
      "employee_id": 16,
      "name": "Olivia Thomas",
      "position": "Legal Counsel",
      "salary": 90000
    },
    {
      "employee_id": 17,
      "name": "Ethan Carter",
      "position": "Database Administrator",
      "salary": 82000
    },
    {
      "employee_id": 18,
      "name": "Sophia Lewis",
      "position": "Graphic Designer",
      "salary": 63000
    },
    {
      "employee_id": 19,
      "name": "Nathan Scott",
      "position": "Operations Manager",
      "salary": 80000
    },
    {
      "employee_id": 20,
      "name": "Ava Allen",
      "position": "Health and Safety Officer",
      "salary": 70000
    }
  ]
}

@app.route('/')
def root():
    return jsonify({'message': 'Welcome to the Employee Management API!'})


@app.route('/employees', methods=['GET', 'POST'])
def employees():
    if request.method == 'GET':
        return jsonify(sample_data['employees'])
    elif request.method == 'POST':
        new_employee = request.json
        new_employee['employee_id'] = len(sample_data['employees']) + 1
        sample_data['employees'].append(new_employee)
        return jsonify({'message': 'Employee added successfully!'})

if __name__ == '__main__':
    app.run(debug=True, port=8080)
