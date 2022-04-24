// const firebase = require('firebase/app');
const admin = require('firebase-admin');
const fireStore = require('firebase-admin/firestore');
const serviceAccount = require('./thenolja.json');

// firebaseConfig 정보로 firebase 시작
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = fireStore.getFirestore();
db.collection('hotels')
  .get()
  .then((hotels) => {
    hotels.forEach((hotel) => {
      console.log(hotel.data());
    });
  });
module.exports = admin;
// firebase의 firestore 인스턴스를 변수에 저장
// const firestore = firebase.firestore();
// console.log(firestore);

// 필요한 곳에서 사용할 수 있도록 내보내기
// module.exports = firebase;
