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


	const start = () =>{
		
	}

	//Анимация логотипа текст
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
		$('.column:nth-child(odd)').animate({"top":"-2658px"},1000, "swing");
	},4000)
	setTimeout(()=>{
		$('.column:nth-child(even)').animate({"top":"20px"},1000, "swing");
	},4000)
	
	// setTimeout(()=>{
	// 	$('.column:nth-child(odd)').animate({"top":"-2416px"},500, "swing");
	// },6500)
	// setTimeout(()=>{
	// 	$('.column:nth-child(even)').animate({"top":"-110px"},500, "swing");
	// },6500)

	// setTimeout(()=>{
	// 	$('.column:nth-child(odd)').animate({"top":"-2293px"},500, "swing");
	// },8000)
	// setTimeout(()=>{
	// 	$('.column:nth-child(even)').animate({"top":"-350px"},500, "swing");
	// },8000)

	// setTimeout(()=>{
	// 	$('.column:nth-child(odd)').animate({"top":"-2052px"},500, "swing");
	// },9500)
	// setTimeout(()=>{
	// 	$('.column:nth-child(even)').animate({"top":"-473px"},500, "swing");
	// },9500)

	//Второй хэш-тег
	// setTimeout(()=>{
	// 	$('.column:nth-child(odd)').animate({"top":"-1929px"},500, "swing");
	// },11000)
	// setTimeout(()=>{	
	// 	$('.column:nth-child(even)').animate({"top":"-724px"},500, "swing");
	// },11000)

	// setTimeout(()=>{
	// 	$('.column:nth-child(odd)').animate({"top":"-1687px"},500, "swing");
	// },12500)
	// setTimeout(()=>{	
	// 	$('.column:nth-child(even)').animate({"top":"-837px"},500, "swing");
	// },12500)

	// setTimeout(()=>{
	// 	$('.column:nth-child(odd)').animate({"top":"-1565px"},500, "swing");
	// },14000)
	// setTimeout(()=>{	
	// 	$('.column:nth-child(even)').animate({"top":"-1079px"},500, "swing");
	// },14000)

	// setTimeout(()=>{
	// 	$('.column:nth-child(odd)').animate({"top":"-1323px"},500, "swing");
	// },15500)
	// setTimeout(()=>{	
	// 	$('.column:nth-child(even)').animate({"top":"-1200px"},500, "swing");
	// },15500)

	//Третий хештег
	// setTimeout(()=>{
	// 	$('.column:nth-child(odd)').animate({"top":"-1201px"},500, "swing");
	// },17000)
	// setTimeout(()=>{	
	// 	$('.column:nth-child(even)').animate({"top":"-1442px"},500, "swing");
	// },17000)

	// setTimeout(()=>{
	// 	$('.column:nth-child(odd)').animate({"top":"-960px"},500, "swing");
	// },18500)
	// setTimeout(()=>{	
	// 	$('.column:nth-child(even)').animate({"top":"-1565px"},500, "swing");
	// },18500)

	// setTimeout(()=>{
	// 	$('.column:nth-child(odd)').animate({"top":"-837px"},500, "swing");
	// },20000)
	// setTimeout(()=>{	
	// 	$('.column:nth-child(even)').animate({"top":"-1807px"},500, "swing");
	// },20000)

	// setTimeout(()=>{
	// 	$('.column:nth-child(odd)').animate({"top":"-595px"},500, "swing");
	// },21500)
	// setTimeout(()=>{	
	// 	$('.column:nth-child(even)').animate({"top":"-1928px"},500, "swing");
	// },21500)

	//Четвертый хэштег
	// setTimeout(()=>{
	// 	$('.column:nth-child(odd)').animate({"top":"-473px"},500, "swing");
	// },23000)
	// setTimeout(()=>{	
	// 	$('.column:nth-child(even)').animate({"top":"-2173px"},500, "swing");
	// },23000)

	// setTimeout(()=>{
	// 	$('.column:nth-child(odd)').animate({"top":"-229px"},500, "swing");
	// },24500)
	// setTimeout(()=>{	
	// 	$('.column:nth-child(even)').animate({"top":"-2294px"},500, "swing");
	// },24500)

	// setTimeout(()=>{
	// 	$('.column:nth-child(odd)').animate({"top":"-110px"},500, "swing");
	// },26000)
	// setTimeout(()=>{	
	// 	$('.column:nth-child(even)').animate({"top":"-2539px"},500, "swing");
	// },26000)

	// setTimeout(()=>{
	// 	$('.column:nth-child(odd)').animate({"top":"11px"},500, "swing");
	// },27500)
	// setTimeout(()=>{	
	// 	$('.column:nth-child(even)').animate({"top":"-2657px"},500, "swing");
	// },27500)

	//Анимация титров
	setTimeout(()=>{
		$('.avon-logo__text').animate( {"opacity":"1"}, 500,"swing");
		$('.avon-logo__left-sheets').animate( {"opacity":"1"}, 500,"swing");
	}, 5000);
	setTimeout(()=>{
		$('.titr_1').animate( {"opacity":"1"}, 500,"swing");
	},5500)

	// setTimeout(()=>{
	// 	$('.titr_1').animate( {"opacity":"0"}, 500,"swing");
	// },11000)
	// setTimeout(()=>{
	// 	$('.titr_2').animate( {"opacity":"1"}, 500,"swing");
	// },11500)

	// setTimeout(()=>{
	// 	$('.titr_2').animate( {"opacity":"0"}, 500,"swing");
	// },17000)
	// setTimeout(()=>{
	// 	$('.titr_3').animate( {"opacity":"1"}, 500,"swing");
	// },17500)

	// setTimeout(()=>{
	// 	$('.titr_3').animate( {"opacity":"0"}, 500,"swing");
	// },23000)
	// setTimeout(()=>{
	// 	$('.titr_4').animate( {"opacity":"1"}, 500,"swing");
	// },23000)

});
