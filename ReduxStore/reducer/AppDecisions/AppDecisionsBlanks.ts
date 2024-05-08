import { LocalDecisions } from './AppDecisionsTypes';

// const testAnswer: MFOResponse = [
//
// 	{
// 		image: "https://i.ibb.co/0qJj9JP/image.png",
// 		login_link: 'https://google.com',
// 		name: "Kvik",
// 		product_type: "MFO",
// 		rate: "От 0% в день",
// 		status: "APPROVED",
// 		sum: 30000
// 	},{
// 		image: "https://419304.selcdn.ru/images.l406102/offers/9560/logo/",
// 		login_link: 'https://google.com',
// 		name: "МаниМэн",
// 		product_type: "MFO",
// 		rate: "От 0% в день",
// 		status: "APPROVED",
// 		sum: 30000
// 	},{
// 		image: "https://i.ibb.co/mDG07ZV/image.png",
// 		login_link: 'https://google.com',
// 		name: "ZaimExpress",
// 		product_type: "MFO",
// 		rate: "От 0% в день",
// 		status: "APPROVED",
// 		sum: 30000
// 	},{
// 		image: "https://i.ibb.co/938SJtW/image.png",
// 		login_link: 'https://google.com',
// 		name: "Zaymigo",
// 		product_type: "MFO",
// 		rate: "От 0% в день",
// 		status: "APPROVED",
// 		sum: 30000
// 	},{
// 		image: "https://i.ibb.co/6XbV2Px/Group-1166.png",
// 		login_link: 'https://google.com',
// 		name: "Отличные наличные",
// 		product_type: "MFO",
// 		rate: "От 0% в день",
// 		status: "APPROVED",
// 		sum: 30000
// 	},{
// 		image: "https://i.ibb.co/34hbCrf/logo-mfo-centrofinans-1.png",
// 		login_link: 'https://google.com',
// 		name: "Центр подбора займов",
// 		product_type: "MFO",
// 		rate: "От 0% в день",
// 		status: "APPROVED",
// 		sum: 30000
// 	},{
// 		image: "https://i.ibb.co/xCVJ34Y/Group-1165.png",
// 		login_link: 'https://google.com',
// 		name: "Деньги Сразу",
// 		product_type: "MFO",
// 		rate: "От 0% в день",
// 		status: "APPROVED",
// 		sum: 30000
// 	},{
// 		image: "https://i.ibb.co/6XbV2Px/Group-1166.png",
// 		login_link: 'https://google.com',
// 		name: "Zaimer",
// 		product_type: "MFO",
// 		rate: "От 0% в день",
// 		status: "CALL",
// 		sum: 30000
// 	},{
// 		image: "https://i.ibb.co/wRfQZS1/image.png",
// 		login_link: 'https://google.com',
// 		name: "LimeMFO",
// 		product_type: "MFO",
// 		rate: "От 0% в день",
// 		status: "APPROVED",
// 		sum: 30000
// 	},{
// 		image: "https://419304.selcdn.ru/images.l406102/offers/693/logo/",
// 		login_link: 'https://google.com',
// 		name: "Екапуста",
// 		product_type: "MFO",
// 		rate: "От 0% в день",
// 		status: "APPROVED",
// 		sum: 30000
// 	},{
// 		image: "https://419304.selcdn.ru/images.l406102/offers/1051/logo/",
// 		login_link: 'https://google.com',
// 		name: "Вебзайм",
// 		product_type: "MFO",
// 		rate: "От 0% в день",
// 		status: "APPROVED",
// 		sum: 30000
// 	},{
// 		image: "https://419304.selcdn.ru/images.l406102/offers/522/logo/",
// 		login_link: 'https://google.com',
// 		name: "Веббанкир",
// 		product_type: "MFO",
// 		rate: "От 0% в день",
// 		status: "APPROVED",
// 		sum: 30000
// 	},{
// 		image: "https://i.ibb.co/wRfQZS1/image.png",
// 		login_link: 'https://google.com',
// 		name: "Lime_zaim",
// 		product_type: "MFO",
// 		rate: "От 0% в день",
// 		status: "APPROVED",
// 		sum: 30000
// 	},
//
// ]

export const initialStateDecisions: LocalDecisions = {
  restart: false,
  response_status: null,
  decision_type: null,
  show_rejected: false,
  finished: false,
  user_id: null,
  mfo_timestamp: null,
  credit_card_response: [],
  credit_cash_response: [],
  installment_card_response: [],
  mfo_response: [],
  deposit_estate_response: [],
  deposit_car_response: [],
  created: null,
};
