## Movie King Server
+ Get CGV, MEGABOX, LOTTE seats by date, location
+ Reference: [junggeehoon blog](https://medium.com/@junggeehoon/%ED%81%AC%EB%A1%A4%EB%9F%AC%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-cgv-imax-%EB%AA%85%EB%8B%B9-%EC%9E%90%EB%A6%AC%EB%A5%BC-%EC%98%88%EB%A7%A4%ED%95%98%EC%9E%90-772255dd0431)
+ Make GraphQL server
+ Lecture [Nomad Coders](https://www.youtube.com/watch?v=dGB0m7agxKE&list=PL7jH19IHhOLOpU_yAYzCO4iQNvdou1AnK&index=2)

## Query
```js
// BoxOffice
query {
  boxOffice {
    image,
    title
  }
}

// Region
query {
  region(type: "megaBox" | "cgv" | "lotte")
}

// TheaterInfo
query {
  theaterInfo(
    type: "megaBox" | "cgv" | "lotte",
    regionIndex: "0",
  )
}

// TimeTable
query {
  timeTable(
    type: "megaBox" | "cgv" | "lotte",
    theaterLink: "",
    // ex: megabox: /theater/time?brchNo=1372(강남)
    // ex: cgv: /theaters/?theaterCode=0056(강남)
    // ex: lotte: '영화관 이름' (Naver 검색을 사용하기 때문)
  )
}
````

## Test
+ Query Test
![alt query test](https://d39c58j2fkj161.cloudfront.net/query-test.png)
+ Mutaion Test
![alt mutaion test](https://d39c58j2fkj161.cloudfront.net/mutation-test.png)