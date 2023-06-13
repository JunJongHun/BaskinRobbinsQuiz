import { useNavigate } from 'react-router-dom';
import BaskinRobbinsTitle from '../../assets/BaskinRobbinsTitle.png';
import Icon from '../../assets/Icon.png';

function Footer() {
  const navigate = useNavigate();

  return (
    <article
      className="flex justify-center mt-auto h-32 gap-4 -ml-4 hover:cursor-pointer"
      onClick={() => navigate('/')}
    >
      <img className="w-7 h-7" src={Icon} alt="베라 아이콘" />
      <img
        className=" w-48 h-6"
        src={BaskinRobbinsTitle}
        alt="베라 영문 이름"
      />
    </article>
  );
}

export default Footer;
