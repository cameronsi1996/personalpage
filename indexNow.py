import requests
r = requests.post('https://www.bing.com/indexnow', json={
  "host": "https://www.bing.com/indexnow",
  "key": "a9f09ac937f84f0e9a783a2e652ffa8e",
  "urlList": [
      "https://cameronsi1996.github.io/personalpage/",
      "https://cameronsi1996.github.io/personalpage/codingProjects/spiritToWineConverter/",
      "https://cameronsi1996.github.io/personalpage/codingProjects/costOfAlcoholCalculator/",
      "https://cameronsi1996.github.io/personalpage/codingBootcampNotes/Javascript/",
      "https://cameronsi1996.github.io/personalpage/codingBootcampNotes/Python/",
      "https://cameronsi1996.github.io/personalpage/lawessays/CUHK%20JD%20Dissertation%20The%20Rise%20of%20Wrap%20Contracts%20in%20the%20Digital%20Age/"
      ]
})
print(f"Status Code: {r.status_code}, Response: {r.json()}")