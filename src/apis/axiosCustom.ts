import axios from 'axios';

export const axiosCustom = axios.create({
  baseURL: 'https://php-project-mvfot.run.goorm.site/', // 기본 url
  timeout: 5000, // 5초 이상 걸리면 에러
});

// 요청 인터셉트
axiosCustom.interceptors.request.use(
  (config) => {
    // 요청 전에 실행할 코드
    console.log('[ axiosCustom interceptors resquest ]');
    console.log('config.method', config.method);
    console.log('config', config);
    return config;
  },
  (error) => {
    // 요청 에러 처리
    console.log('[ axiosCustom interceptors resquest ERROR ]', error);
    return Promise.reject(error);
  },
);

// 응답 인터셉트
axiosCustom.interceptors.response.use(
  (response) => {
    // 응답 데이터 전달
    console.log('[ axiosCustom interceptors response ]');
    console.log(`response.data ${response.config.url}`, response.data);
    return response;
  },
  (error) => {
    // 응답 에러 처리
    console.log('[ axiosCustom interceptors response ERROR ]', error);
    return Promise.reject(error);
  },
);
