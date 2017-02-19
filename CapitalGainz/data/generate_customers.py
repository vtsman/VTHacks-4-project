import requests
import json

customer = {
    "first_name": "John",
    "last_name": "Doe",
    "address": {
        "street_number": "216",
        "street_name": "Washington Street",
        "city": "New York City",
        "state": "NY",
        "zip": "12032"
    }
}

headers = {"Content-Type": 'application/json'}

# params = {"grant_type": "client_credentials"}
r = requests.post(
    'http://api.reimaginebanking.com/customers?key=e27720efd690c95aeda7c6ed631b9b27', data=json.dumps(customer), headers=headers)

print r.text
