import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import { __await } from 'tslib';

// const moviesTitles = [
//   "메트릭스",
//   "해리포터",
//   "스타워즈",
//   "풀메탈자켓"
// ]

// const movieImages = [
//   "http://ticketimage.interpark.com/Movie/still_image/V16/V1601447p_s01.gif",
//   "https://upload.wikimedia.org/wikipedia/ko/thumb/f/fb/%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%B6%88%EC%9D%98_%EC%9E%94_%EC%98%81%ED%99%94.jpg/250px-%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%B6%88%EC%9D%98_%EC%9E%94_%EC%98%81%ED%99%94.jpg",
//   "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg",
//   "http://mblogthumb1.phinf.naver.net/data18/2007/1/6/4/full_metal_jacket_manif-inde9898.jpg?type=w210"
// ]

// const movies = [
//   {
//     title:"메트릭스",
//     poster:"http://ticketimage.interpark.com/Movie/still_image/V16/V1601447p_s01.gif"
//   },
//   {
//     title:"해리포터",
//     poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/f/fb/%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%B6%88%EC%9D%98_%EC%9E%94_%EC%98%81%ED%99%94.jpg/250px-%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%B6%88%EC%9D%98_%EC%9E%94_%EC%98%81%ED%99%94.jpg",
//   },
//   {
//     title:"스타워즈",
//     poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg",
//   },
//   {
//     title:"풀메탈자켓",
//     poster:"http://mblogthumb1.phinf.naver.net/data18/2007/1/6/4/full_metal_jacket_manif-inde9898.jpg?type=w210"
//   },

// ] 컴포넌트 안으로 옮김

// **리액트의 싸이클 Render와 Update**
  // Render : componentWillMount() -> render() -> componentDidMount()
  // 싸이클이 시작되었음을 알게됨 -> 이제 컴포넌트가 리액트 세계에 '존재' 하게 되었을을 알게됨 
  // -> 이제 성공적으로 리엑트 세계에 컴포넌트가 자리잡았음을 알게됨
  // 우리가 render할때, 우리의 컴포넌트를 띄울 때 이 순서대로 함
  // 이 싸이클은 자동으로 발생함 

  // Update : componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()
  //  컴포넌트가 새로운 props를 받음 -> 리액트는 old props, 새로운 props를 살펴본 다음에 이전고 새로운 prop가 다르면 리액트는
  // '업데이트 = true' 라고 생각함 -> 컴포넌트가 업데이트를 할 거라는 단계로 넘어감 -> render하고 -> 컴포넌트는 업데이트가 됬다


class App extends Component { //APP 컴포넌트 *모든 컴포넌트는 render function을 갖고있다.

  // state는 리액트 컴포넌트 안에 있는 오브젝트
  // state가 바뀔때마다 컴포넌트는 다시 render
  
  // state는 컴포넌트를 로드하는 방법이고, 디폴트 state와 함깨
  // 모든컴포넌트가 state가 있는것이 아니다.
  // smart 컴포넌트는 state가 있고 dumb컴포넌트는 state가 없다. 이들이 갖고있는것은 props뿐
  // state가 없고 props밖에 없을 때에는 클래스 컴포넌트를 쓰는 대신에 function 컴포넌트로 바꾸면 된다
  // 정확히 말하면 stateless functional 컴포넌트
  

  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({
  //       movies: [
  //         {
  //           title:"메트릭스",
  //           poster:"http://ticketimage.interpark.com/Movie/still_image/V16/V1601447p_s01.gif"
  //         },
  //         {
  //           title:"해리포터",
  //           poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/f/fb/%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%B6%88%EC%9D%98_%EC%9E%94_%EC%98%81%ED%99%94.jpg/250px-%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%B6%88%EC%9D%98_%EC%9E%94_%EC%98%81%ED%99%94.jpg",
  //         },
  //         {
  //           title:"스타워즈",
  //           poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg",
  //         },
  //         {
  //           title:"풀메탈자켓",
  //           poster:"http://mblogthumb1.phinf.naver.net/data18/2007/1/6/4/full_metal_jacket_manif-inde9898.jpg?type=w210"
  //         },
  //         {
  //           title: "이클립스",
  //           poster: "http://image.newdaily.co.kr/site/data/img/2010/05/23/2010052300028_0.jpg"
  //          }
  //       ]
  //     })
  //   },5000)
  // }

  state = {}
  
  // promise 는 새로운 자바스크립트 컨셉
  // 이게 좋은 이유는 asynchronous programming 때문이다 
  // 첫번째 라인이 끝나지 않으면 두번째라인은 시작되지 않는다 이것을 synchronous(동기)라고한다
  // 그러나 ansynchronous인 promise는 첫번째 라인이 다끝나는 말든, 두번째 라인이 작업을 하게 한다  
  //componentDidMount(){
    //* fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    //*.then(response => response.json()) // 위의 작업이 끝나면, 성공적 수행이 아니라 그냥 작업이 완료되면, then을 불러옴
    //  then function은 한개의 attribute만 준다 그리고 그것은 오브젝트인다 fetch의 결과물
    // console.log에 찍힌 결과물을 보면 "너가 이 url을 불럿고, 성공적이였으며 다 좋다" 라고 해석할 수 있다.
    //*.then(response => console.log(response)) 결과물
    // Response {type: "cors", url: "https://yts.am/api/v2/list_movies.json?sort_by=rating", redirected: false, status: 200, ok: true, …}
    //   body: ReadableStream
    //   bodyUsed: false
    //   headers: Headers {} 
    //   ok: true
    //   redirected: false
    //   status: 200
    //   statusText: ""
    //   type: "cors"
    //   url: "https://yts.am/api/v2/list_movies.json?sort_by=rating"
    //   __proto__: Response
    // 이렇게 나오는데 여기서 body의 ReadableStream은 바이트(0101010..)로 이루어졌다는 뜻 이걸 제이슨으로 바꿔야함
    //*.then(json => console.log(json))
    // fetch의 못생긴 데이터를 response로 체크하고, 제이슨으로 변환하고 콘솔로 본다.
    //*.catch(err => console.log(err))
    // 위의 라인이 완료되면, 뭔가를 해라, 근데 위의 라인이이 에러가 있으면 잡아서(catch) 나에게 보여줘
  //}
  // promise는 성공적으로 수행할 수 있고, 그렇지 않을 경우 결과물을 catch,then으로 받아볼 수 있다.
  // then은 원하는 많큼 바꿀 수 있다. 그리고 무한정으로 에러를 catch로 잡을 수 있다.
  // fetch가 좋은 이유는 url을 에이작스로 불러올 수 있으니까! 그것도 아주 심플하게!
 
  componentDidMount(){
    this._getMovies()
  } 
  // 이렇게 쓰는 이유?
  // 1. 큰 component did mount를 갖고싶지 않아서

  _renderMovies = () => { // _쓰는 이유 : 리액트 자체기능과 나의 기능에 차이를 두기 위해서
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie 
      title={movie.title} 
      poster={movie.medium_cover_image} 
      key={movie.id} // 컴포넌트의 key는 인덱스를 사용하는것은 좋지 않다 느려진다
      genres={movie.genres}
      synopsis={movie.synopsis}
       />  // genres={movie.genres}, synopsis={movie.synopsis} 추가한후 props를 업데이트하면됨 
    })     // movie.js에 Movie.propTypes에 genres와 synopsis추가
    return movies
  }

   _getMovies = async () => { 
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }
  // asynchronous : 이전 라인의 작업이 끝날때까지 기다리는 것이 아닐 때
  // did mount 하고 나면, getMovies를 할꺼고 그리고 getMovies는 ansynchronous function인데
  // movie라는 variable를 갖고 있다. 이게 뭐냐면 call api라는 function을 await모드에서 !
  // 위의 코드를 다시 해석하면 내가 await으로 하는 것은, call api 기능이 끝나는 것을 기다리고, 
  // '끝나기를' 기다리는 거, '성공적으로 수행'이 아니라 그리고 call api의 retrun value 값이 무엇이든
  // movies에 넣을 것임 다시말해 call api의 return value를 movies에 set 할꺼임
  // 그리고 이 컴포넌트의 setState를 movies로 할거임, 그건 call api의 return value이다.
  // setState는 call api 작업이 완료되기 전까지는 실행되지 않을꺼다 '완료'되기 전까지, '성공적수행'이 아니라
  // 성공적 혹은 실패로 끝날 수 있다. 하지만 작업이 완료되어야 한다.
  // 이를 하는 방법은, fetch라는 이름의 promise를 return할것임
  // 그리고 나의 컴포넌트 state을 movies로 set 한 것이다. 이 movies는 모던 자바스크립트로 작성(원래 movies : movies)
  // state 안에 movies가 있으면, _renderMovies 라는 function을 불러올것임
  // 그리고 _renderMovies는 movies 라는 const를 불러오는데
  // 이는 맵핑을 한다. 영화 타이틀, 그리고 포스터(large.cover.image)순으로


  _callApi = () => {
      return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download count')
      .then(response => response.json())
      .then(json => json.data.movies) //화살표 함수는 return 적을 필요없다
      .catch(err => console.log(err))
  }

  
  
  render() {
    const { movies } = this.state;
    return ( // 데이터가 있으면 this._renderMovies 없으면 Loading출력 
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'} 
      </div>
    );
   }
  }
  // 첫번째 작업, fetch를 call api로 변경 그 다음 DidMount안에 getMovies라는 function을 썻다.
  // getMovies는 asynchromous function 이다. 그 안에 movies라는 이름의 const variable를 생성했다
  // 그리고 call api 작업이 완료되고 return 하기를 await 한다. 
  // call api는 fetch promise를 return 할 것인데, 이는 모든 데이터의 제이슨이다.
  // 그 안에 movies가 있는, data라는 이름의 오브젝트와 함께
  // 그래서 'json.data.movies'라는 value는, const movies의 결과값이 된다.

  export default App;

  // state = {
  //   greeting: 'Hello!',
  //   movies: [
  //     {
  //       title:"메트릭스",
  //       poster:"http://ticketimage.interpark.com/Movie/still_image/V16/V1601447p_s01.gif"
  //     },
  //     {
  //       title:"해리포터",
  //       poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/f/fb/%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%B6%88%EC%9D%98_%EC%9E%94_%EC%98%81%ED%99%94.jpg/250px-%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%B6%88%EC%9D%98_%EC%9E%94_%EC%98%81%ED%99%94.jpg",
  //     },
  //     {
  //       title:"스타워즈",
  //       poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg",
  //     },
  //     {
  //       title:"풀메탈자켓",
  //       poster:"http://mblogthumb1.phinf.naver.net/data18/2007/1/6/4/full_metal_jacket_manif-inde9898.jpg?type=w210"
  //     }
  //   ]
  // }

  // 영화하나를 더 추가하기
  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({
  //       movies: [
  //         ...this.state.movies,
  //         {
  //           title: "이클립스",
  //           poster: "http://image.newdaily.co.kr/site/data/img/2010/05/23/2010052300028_0.jpg"
  //         }
  //       ]
  //     })
  //   },1000)
  // }


  //componentDidMount(){
  //  setTimeout(() => {
      // this.state.greeting = 'something' // x state를 직접적으로 절대 쓰면 안됨
  //    this.setState({
  //      greeting: 'Hello again!'
  //    })// state를 업데이트 하려면, this.setState를 사용해야함
  //  }, 5000)
  //}// 컴포넌트가 mount되면 5초를 기다리고, greeting를 업데이트 할것임
  // ** state를 변경하면, render이 다시 작동한다. 새로운 state와 함께



//  render() { //render은 '이 컴포넌트가 나에게 보여주는 것이 무엇인가' , render기능은 뭐가를 보여주는,출력하는 기능이다.
//    return (
//       map()이라는 기능은 새로운 array를 만든다
//       map()을 하면 새로운 arry가 생기는데, 다른 arry의 엘리먼트를 포함한 값이다.
//      <div className="App">
//        {/* {this.state.greeting} */}
//        {this.state.movies.map((movie, index) => { //밖에 있던 movies배열이 컴포넌트 안에있는 state안으로 들어오면서 movies 앞에 this.state. 가 붙엇다 
//         return <Movie title={movie.title} poster={movie.poster} key={index}/>  //리엑트는 엘리먼트가 많을경우 key라는 것을 줘야된다.
//        })}
//        {/* 바로밑에 코드와 위에 코드는 같다 */}
//         {/* {[
//           <Movie title={movies[0].title} poster={movies[0].poster}/>
//           <Movie title={movies[1].title} poster={movies[1].poster}/>
//           <Movie title={movies[2].title} poster={movies[2].poster}/>
//           <Movie title={movies[3].title} poster={movies[3].poster}/>
//         ]} */}


//         {/* <Movie title={moviesTitles[0]} poster={movieImages[0]}/>
//         <Movie title={moviesTitles[1]} poster={movieImages[1]}/>
//         <Movie title={moviesTitles[2]} poster={movieImages[2]}/>
//         <Movie title={moviesTitles[3]} poster={movieImages[3]}/> */}
//       </div>

//       // 자바스크립트안에 HTML이 자리잡고 있다. 이걸 JSX라고 한다.
//       // JSX는 리액트 컴포넌트를 만들때 사용하는 언어이다. 규칙은 굉장히 심플함
//       // 즉 JSX는 리엑트로 작성하는 html임
//     );
//   }
// }

// 부모가 자식한테 정보를 어떻게 주느냐? props를 통해서 준다.

