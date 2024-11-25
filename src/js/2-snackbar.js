import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const form= event.target;
    const delay= Number(form.delay.value);
    const state= form.state.value;
  
    const createPromise= (delay, state)=> {
      return new Promise((resolve, reject)=> {
        setTimeout(()=> {
          if (state === 'fulfilled') {
            resolve(delay);
          } else {
            reject(delay);
          }
        }, delay);
      });
    };

    createPromise(delay, state)
      .then((delay)=> {
        iziToast.success({
            title: 'OK',
            titleColor:'#fff',
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: 'topRight',
            backgroundColor: '#59a10d',
            messageColor: '#fff',
            close: false,
            closeOnClick: true
        });
      })
      .catch((delay)=> {
        iziToast.error({
            title: 'Error',
            titleColor:'#fff',
            message: `❌ Rejected promise in ${delay}ms`,
            position: 'topRight',
            backgroundColor: '#C82929',
            messageColor: '#fff',
            close: false,
            closeOnClick: true
        });
      });
  });