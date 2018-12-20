import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from "../node_modules/react-lines-ellipsis"

// class Movie extends Component{

//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }
//     // 터미널에 yarn add prop-types 인스톨 > import
//     // 만약 부모 컴포넌트가 string를 보내면, PropTypes로 string라는 것을 체크할 수잇다. 
//     // 그게 아니라면 에러메세지가 뜨고 덕분에 우리가 부모 컴포넌트에게서 받는 정보의 종류가 무엇인지 체크할 수 있다.
//     // isRequired라고 작성하면 movie컴포넌트는 title이라는 prop을 제공하는 것이 필수로 설정되는 것 

//     render(){
//         return(
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h1>{this.props.title}</h1> 
//             </div>
//         ) 
//     }
// }
//컴포넌트 생성 > 랜더 > 리턴 > html내용
// import react > class > render(필수기능)


// 위의 class Movie와 같음
function Movie({title,poster,genres,synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                 <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1> 
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Movie__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />
                </p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    synopsis : PropTypes.string.isRequired
}


// class MoviePoster extends Component{

//     static propTypes = {
//         poster: PropTypes.string.isRequired // 이미지를 꼭보여줘야 하니깐 proptypes설정
//     }

//     render(){
//         return(
//            <img src={this.props.poster} />
//         )
//     }
// }
// 위에 작성한 class MoviePoster와 function MoviePoster는 같다.
// state가 없고 props밖에 없을 때에는 클래스 컴포넌트를 쓰는 대신에 function 컴포넌트로 바꾸면 된다
function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )// alt={alt} title={alt}이렇게 하면 포스터사진 호버시 툴팁으로 나옴
}
// 이 함수는 컴포넌트 클래스가 아니기 때문에 props를 지우고 poster만 남긴다

// dumb컴포넌트와 smart 컴포넌트를 이야기하는 이유는
// 어떤 컴포넌트는 그냥 return을 하기위해 존재함
// dumb컴포넌트는 component will mount, funcion, update state, function render, 라이프사이클 ..필요하지 않다.
// 그냥 한개의 props만 있으면 됨. poster과 같은
// 1개의 props만 있고, 1개의 html태그만(igm) 필요함 

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}


MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}
// dumb function의 propTypes를 확인하는 방법

export default Movie 

//json은 오브젝트를 자바스크립트로 작성하는 기법