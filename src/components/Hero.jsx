import UserImage from '../assets/images/user.jpg';

export default function Hero(){
return (
    <div className="hero">
        <img src={UserImage} alt="user" className="user" />
    </div>
)
}