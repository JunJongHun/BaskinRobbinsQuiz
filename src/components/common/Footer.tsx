import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <article
      className="flex justify-center mt-8 h-32 gap-4 -ml-4 hover:cursor-pointer"
      onClick={() => navigate('/')}
    >
      <img className="w-7 h-7" src="/src/assets/Icon.png" alt="베라 아이콘" />
      <img
        className=" w-48 h-6"
        src="/src/assets/BaskinRobbinsTitle.png"
        alt="베라 영문 이름"
      />
    </article>
  );
}

export default Footer;
