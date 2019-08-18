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
	},2500)

//	$('.avon-logo__').delay(500).animate(
//		{"opacity":"1"},
//		{
//			duration: 500,
//			easing: "swing",
//			complete: () => {
//				$('.avon-logo').delay(1000).animate({"opacity":"0"}, 1000, "swing");
//				setTimeout(()=>{
//					$('.avon-logo').animate({"left":"-91px"}, 0);
//					$('.avon-logo').animate({"opacity":"1"}, 1000, "swing");
//				},2000)
//			}
//		}
//	)


});
