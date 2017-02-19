import requests
import json

account = {
    "type": "Credit Card",
    "nickname": "John Doe",
    "rewards": 0,
    "balance": 2000
}

print json.dumps(account)
headers = {'Content-Type': 'application/json'}
r = requests.post(
    'http://api.reimaginebanking.com/customers/58a90fcd1756fc834d90558d/accounts?key=e27720efd690c95aeda7c6ed631b9b27', data=json.dumps(account), headers=headers)

print r.text
