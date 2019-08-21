document.addEventListener("DOMContentLoaded", function() {

	// fetch('http://localhost:3000/photos.json')
	// 	.then( response => {
	// 		return response.json()
	// 	})
	// 	.then( json => {
	// 		addPhoto(json, 0, 9);
	// 	})
	
	// 	const addPhoto = (json, index, index_max) => {
	// 		for(index; index < json.length; index++) {
	// 			console.log(index)
	// 			if(index === index_max) {
	// 				break;
	// 			}
	
	// 		}
	// 		console.log("index after cicle", index);
	// 	};

	const photos = {
        'slide1': [
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
        ],
        'slide2': [
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
        ],
        'slide3': [
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
            './img/kola.jpg',
        ],
    };

	

	const parseImg = (photos) => {
		console.log(photos)
	}
	parseImg(photos)

	// const photo = `<img src="./img/kola.jpg">`

	// $('.column__photo').map((index, item)=>{
	// 	item.innerHTML = photo 
	// })

	

	const start = (photos) => {
			// Анимация логотипа текст
		$('.avon-logo__text').delay(500).animate( {"opacity":"1"}, 500,"swing");
		$('.avon-logo__left-sheets, .avon-logo__right-sheet').delay(1000).animate( {"opacity":"1"}, 500,"swing");
		$('.sheets').delay(1500).animate( {"opacity":"1"}, 500,"swing");
		//останавливаем анимацию
		setTimeout(()=>{
			$('.avon-logo__text').animate().finish();
			$('.avon-logo__left-sheets, .avon-logo__right-sheet').animate().finish();
			$('.sheets').animate().finish();
		}, 2000);
		// запускаем пропадание
		setTimeout(()=>{
			$('.avon-logo__text').animate( {"opacity":"0"}, 500,"swing");
			$('.avon-logo__left-sheets, .avon-logo__right-sheet').animate( {"opacity":"0"}, 500,"swing");
			$('.sheets').animate( {"opacity":"0"}, 500,"swing");
		},2500);
		setTimeout(()=>{
			$('.avon-logo__text').animate().finish();
			$('.avon-logo__left-sheets, .avon-logo__right-sheet').animate().finish();
			$('.sheets').animate().finish();
			$('.avon-logo').css({"left":"320px"});
			$('.avon-logo__left-sheets img:nth-child(1)').css({"opacity":"0"});
			$('.avon-logo__left-sheets img:nth-child(2)')
				.css({"transform":"rotate(-131deg) skewX(-10deg)", "height":"464px", "left":"-210px", "top":"-99px" });
		},3000);



		//Анимация фоток

		setTimeout(()=>{
			const oddCols = $('.column:nth-child(odd)')
			const evenCols = $('.column:nth-child(even)')
		
			const custom = CustomEase.create("custom", "M0,0,C0,0,0,0.497,0.248,0.746,0.499,0.997,1,1,1,1")
			const custom2 = CustomEase.create("custom_2", "M0,0,C0,0,0.499,0.102,0.499,0.499,0.499,0.853,1,1,1,1")
			
			// Нечетные колонки анимация
			TweenLite.to(oddCols, 2.5, { ease: custom, y: 256});
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 441 }).delay(2.5);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 626 }).delay(5);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 811 }).delay(7.5);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 986 }).delay(10);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 1171 }).delay(12.5);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 1356 }).delay(15);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 1541 }).delay(17.5);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 1726 }).delay(20);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 1911 }).delay(22.5);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 2096 }).delay(25);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 2281 }).delay(27.5);

			// TweenLite.to(oddCols, 2.5, { ease: custom2, y: 2466 }).delay(30);
			// TweenLite.to(oddCols, 2.5, { ease: custom2, y: 2836 }).delay(32.5);
			// TweenLite.to(oddCols, 2.5, { ease: custom2, y: 2922 }).delay(35);
			
			//четный
			TweenLite.to(evenCols, 2.5, { ease: custom, y: -430});
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -617 }).delay(2.5);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -802 }).delay(5);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -987 }).delay(7.5);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -1169 }).delay(10);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -1354 }).delay(12.5);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -1539 }).delay(15);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -1724 }).delay(17.5);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -1909 }).delay(20);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -2094 }).delay(22.5);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -2279 }).delay(25);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -2454 }).delay(27.5);

			// 	TweenLite.to(evenCols, 2.5, { ease: custom2, y: -2639 }).delay(30);
			// 	TweenLite.to(evenCols, 2.5, { ease: custom2, y: -2824 }).delay(32.5);
			// 	TweenLite.to(evenCols, 2.5, { ease: custom2, y: -3164 }).delay(35);
			// }, 3500)
		
		}, 3500)	
		// Анимация титров
		setTimeout(()=>{
			$('.avon-logo__text').animate( {"opacity":"1"}, 500,"swing");
			$('.avon-logo__left-sheets').animate( {"opacity":"1"}, 500,"swing");
		}, 3500);
		setTimeout(()=>{
			$('.titr_1').animate( {"opacity":"1"}, 500,"swing");
		},4000)

		setTimeout(()=>{
			$('.titr_1').animate( {"opacity":"0"}, 500,"swing");
		},11000)
		setTimeout(()=>{
			$('.titr_2').animate( {"opacity":"1"}, 500,"swing");
		},11500)

		setTimeout(()=>{
			$('.titr_2').animate( {"opacity":"0"}, 500,"swing");
		},19000)
		setTimeout(()=>{
			$('.titr_3').animate( {"opacity":"1"}, 500,"swing");
		},19500)

		setTimeout(()=>{
			$('.titr_3').animate( {"opacity":"0"}, 500,"swing");
		},27000)
		setTimeout(()=>{
			$('.titr_4').animate( {"opacity":"1"}, 500,"swing");
		},27500)
	};

	window.start = start;

	start()
});
