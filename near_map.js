// 這是 map.js

let map;
let userLatLng;
let selectedRestaurant;
let marker;
let directionService;
let directionRenderer;

const radiusSlider = document.getElementById('radius-slider');
const radiusValue = document.getElementById('radius-value');
let range = parseInt(radiusSlider.value);
let bounds;

// 取得按鈕元素
const chineseFoodButton = document.getElementById('chinese-food-button');
const subcategoriesDiv = document.querySelector('.subcategories');
const westernFoodButton = document.getElementById('western-food-button');
const veganFoodButton = document.getElementById('vegan-food-button');
const dessertButton = document.getElementById('dessert-button');
const noodleButton = document.getElementById('noodle-button');
const beverageButton = document.getElementById('beverage-button');
const categoriesContainer = document.getElementById('restaurant-categories');

// 取得大分類按鈕和相對應的小分類容器
const categoryButtons = document.querySelectorAll('.category-button');

let infoWindow = null;

radiusSlider.addEventListener('input', function() {
    range = parseInt(radiusSlider.value);
    console.log(range);
    radiusValue.textContent = range + ' 公尺';
});

function initMap() {

    // 初始位置
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 24.785939, lng: 120.999388 },
        zoom: 10,
        // 隱藏其他POI圖標，僅顯示商家
        styles: [{
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
        }, {
            featureType: 'poi.business',
            elementType: 'labels',
            stylers: [{ visibility: 'on' }]
        }, {
            featureType: 'transit',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
        }, {
            featureType: 'landscape',
            elementType: ('labels', 'geometry'),
            stylers: [{ visibility: 'off' }]
        }, {
            featureType: 'road',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
        }]

    });
    
    // // 创建用于用户位置的图标
    // const userIcon = {
    //     url: 'user-marker.png', // 用户位置的图标图片 URL
    //     scaledSize: new google.maps.Size(32, 32), // 图标的大小
    // };
    
    // 创建用于餐厅或其他地点的标记图标
    // const restaurantIcon = {
    //     url: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png', // 餐厅位置的图标图片 URL
    //     scaledSize: new google.maps.Size(32, 32), // 图标的大小
    // };

    bounds = new google.maps.LatLngBounds();
    // 取得使用者位置
    navigator.geolocation.getCurrentPosition(function(position) {
        userLatLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        // 在地圖上標記使用者位置
        var userMarker = new google.maps.Marker({
            position: userLatLng,
            map: map,
            icon: userIcon,
            title: "您的位置"
        });

        // 將地圖中心設置為使用者位置
        map.setCenter(userLatLng);
        map.setZoom(16);

        // 自動搜尋功能
        const autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('search-input'),
            {
                types: ['restaurant'], // 限制搜尋結果為餐廳
                location: userLatLng,
                radius: range,
                strictBounds: true,
            }
        );

        autocomplete.addListener('place_changed', function() {
            const place = autocomplete.getPlace();

            // 設定選擇的餐廳
            selectedRestaurant = {
                location: place.geometry.location,
                placeId: place.place_id,
                name: place.name,
                address: place.formatted_address,
                phoneNumber: place.formatted_phone_number,
                rating: place.rating,
            };

            // 顯示選擇的餐廳
            map.setCenter(selectedRestaurant.location);

            if (!marker) {
                marker = new google.maps.Marker({
                    map: map,
                });
            }

            marker.setPosition(selectedRestaurant.location);

            // 路線
            if (!directionRenderer) {
                directionRenderer = new google.maps.DirectionsRenderer({ // 修正為 DirectionsRenderer
                    map: map,
                });
            }

            directionRenderer.set('directions', null);

            if (!directionService) {
                directionService = new google.maps.DirectionsService(); // 添加 DirectionsService
            }

            directionService.route(
                {
                    origin: userLatLng,
                    destination: {
                        placeId: selectedRestaurant.placeId,
                    },
                    travelMode: 'WALKING',
                },
                function(response, status) {
                    if (status === 'OK') {
                        directionRenderer.setDirections(response);

                        if (!infoWindow) {
                            infoWindow = new google.maps.InfoWindow(); // 修正為 InfoWindow
                        }

                        infoWindow.setContent( // 修正為 setContent
                            `
                            <h3>${selectedRestaurant.name}</h3>
                            <div>地址: ${selectedRestaurant.address}</div>
                            <div>電話: ${selectedRestaurant.phoneNumber||'暫無'}</div>
                            <div>評分: ${selectedRestaurant.rating ||'暫無'}</div>
                            <div>步行時間: ${response.routes[0].legs[0].duration.text}</div>
                            `
                        );
                        infoWindow.open(map, marker);
                    }
                }
            );
        });
    });
    // 初始化 PlacesService
    const placesService = new google.maps.places.PlacesService(map);

    // 取得大分類按鈕和相對應的小分類容器
    const categoryButtons = document.querySelectorAll('.category-button');

    // 大分類按鈕的點擊事件處理
    categoryButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // 取得按鈕上顯示的文本作為搜尋關鍵字
            const keyword = button.innerText.trim();
            searchAndMarkRestaurants(keyword,);

            // 隱藏所有小分類
            document.querySelectorAll('.subcategories').forEach(function(subcategory) {
                subcategory.style.display = 'none';
            });

            // 顯示當前大分類按鈕旁邊的小分類
            const subcategory = button.nextElementSibling;
            if (subcategory.classList.contains('subcategories')) {
                subcategory.style.display = 'block';

                // 小分類按鈕的點擊事件處理
                subcategory.querySelectorAll('.subcategory-button').forEach(function(subButton) {
                    subButton.addEventListener('click', function() {
                        // 取得按鈕上顯示的文本作為搜尋關鍵字
                        const subKeyword = subButton.innerText.trim();
                        searchAndMarkRestaurants(subKeyword);
                    });
                });

            }
        });
    });

    // 存儲已經顯示的餐廳的ID的集合
    let displayedRestaurantIds = new Set();

    

    function searchAndMarkRestaurants(category, IdList) {
        bounds = new google.maps.LatLngBounds();

        displayedRestaurantIds.clear();
        // 清除之前的標記
        clearMarkers();

        // 取得卡片容器元素
        const cardContainer = document.getElementById('card-container');

        // 清空卡片容器
        cardContainer.innerHTML = '';

        if (category != null) {
            // 搜尋特定類型的餐廳
            placesService.textSearch({
                query: category,
                types: ['restaurant'],
                location: userLatLng,
                radius: range,
                strictBounds: true,
            }, function(results, status)
                {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        // 標記新的餐廳
                        results.forEach(function(place) {
                            handleMarkAndCard(place.place_id);
                        })
                    }
                }
            )
        } else {
            // 以IdList搜尋
            IdList.forEach(function(placeId) {
                handleMarkAndCard(placeId);
            });
        }
    };

    function handleMarkAndCard(place_id) {
        // 使用Place Details請求取得更多信息，包括電話號碼
        placesService.getDetails({
            placeId: place_id
        }, function(placeDetails, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {

                const location = placeDetails.geometry.location;

                console.log("PlaceDetails: ", placeDetails);

                // 擴展地圖的邊界以包括當前餐廳的位置
                bounds.extend(location); // 擴展bounds以包括新的位置
                // console.log("bounds: ", bounds.toJSON());
                map.fitBounds(bounds);

                const markerId = `marker-${place_id}`;
                const marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    // icon: restaurantIcon,
                    title: placeDetails.name,
                    markerId: markerId, // 添加獨立的編號
                });

                // 顯示 InfoWindow
                displayRestaurantInfo(placeDetails, marker);

                // 將標記存儲到全局數組中以便後續清除
                markers.push(marker);
                updateCard(placeDetails, place_id);
            }
        });
    };


    // 存儲標記的全局數組
    const markers = [];

    // 清除標記的函數
    function clearMarkers() {
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers.length = 0;
    }

    function displayRestaurantInfo(place, marker) {
        // 使用 Places Service 取得店家詳細信息
        const placesService = new google.maps.places.PlacesService(map);

        // 創建與標記關聯的信息窗口
        const infoWindow = new google.maps.InfoWindow({
            content: `
            <h3>${place.name}</h3>
            <div>地址: ${place.formatted_address}</div>
            <div>電話: ${place.formatted_phone_number|| '暫無'}</div>
            <div>評分: ${place.rating || '暫無'}</div>
        `,
        });

        // 將信息窗口與標記關聯
        marker.infoWindow = infoWindow;

        // 添加點擊標記時的事件監聽器
        marker.addListener('click', function() {
            // 關閉之前打開的信息窗口
            markers.forEach(function(m) {
                m.infoWindow.close();
            });
            // 打開當前標記的信息窗口
            infoWindow.open(map, marker);

            // 獲取餐廳的place_id
            const placeId = place.place_id;
            
            // 滾動到相應的餐廳卡片
            const cardId = `restaurant-card-${placeId}`;
            const card = document.getElementById(cardId);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // 更新卡片內容
    function updateCard(placeDetails, place_id) {
        // 取得卡片容器元素
        const cardContainer = document.getElementById('card-container');
        

        // 檢查餐廳是否已經顯示過
        if (!displayedRestaurantIds.has(place_id)) {

            // 如果餐廳未顯示過，繼續添加卡片
            displayedRestaurantIds.add(place_id);

            // 創建新的店家卡片
            const card = document.createElement('div');
            card.className = 'card block';
            card.id = `restaurant-card-${place_id}`;

            // 創建唯一的收藏按鈕 ID
            const favoriteButtonId = 'favorite-button-${place_id}';
            const isFavorite = isRestaurantFavorite(place_id);
            const buttonText = isFavorite ? '取消收藏' : '收藏';
            
            let priceString = '';
            if (placeDetails.price_level) {
                priceString = '$'.repeat(placeDetails.price_level);
            } else {
                priceString = '暫無';
            }
            
            // 將評分轉換為星號圖形化顯示
            let ratingString = '';
            if (placeDetails.rating) {
                const rating = Math.round(placeDetails.rating); // 四捨五入到最接近的整數
                const stars = '★'.repeat(rating); // 使用★字符重複表示評分
                ratingString = `${stars} ${placeDetails.rating}`;
            } else {
                ratingString = '暫無';
            }

            // 在卡片内容中添加外送链接的超链接
            const deliveryLink = 'https://www.foodpanda.com.tw/restaurant/w21l/bao-da-gang-shi-cha-can-ting-ai-mai-xin-zhu-dian';

            // 設置卡片內容，檢查是否有照片
            if (placeDetails.photos && placeDetails.photos.length > 0) {
                const photoUrl = placeDetails.photos[0].getUrl();
                // card.class = "card";
                card.innerHTML = `
                <div class="card-image">
                    <figure class="image is-2by1">
                        <img id="restaurant-photo" src="${photoUrl}" alt="餐廳照片">
                    </figure>
                </div>

                <div class="content" style="overflow: hidden;">
                    <p class="title is-5" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${placeDetails.name}</p>
                    <p class="subtitle is-6">${ratingString}</p>
                    <p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 12px;">地址：${placeDetails.formatted_address}</p>
                    <p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 12px;">電話：${placeDetails.formatted_phone_number || '暫無'}</p>
                    <p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 12px;">價位：${priceString}</p>
                    <p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 12px;">外送連結：<a href="${deliveryLink}" target="_blank">點此訂購外送</a></p>
                    <p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 12px;">營業狀態：${getBusinessStatus(placeDetails.opening_hours)}</p>
                    <p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 12px;">網頁：<a href="${placeDetails.website || '#'}" target="_blank">${placeDetails.website || '暫無'}</a></p>
                    <button id="${favoriteButtonId}" class="favorite-button button block" style="font-size: 12px;">${buttonText}</button>
                </div>

            `;

            } 
            else {
                card.innerHTML = `
                    <h3>${placeDetails.name}</h3>
                    <p>${ratingString}</p>
                    <p>地址：${placeDetails.formatted_address}</p>
                    <p>電話：${placeDetails.formatted_phone_number || '暫無'}</p>
                    <p>價位：${priceString}</p>
                    <p>營業狀態：${getBusinessStatus(placeDetails.opening_hours)}</p>
                    <p>外送連結：${'https://www.foodpanda.com.tw/restaurant/w21l/bao-da-gang-shi-cha-can-ting-ai-mai-xin-zhu-dian'}</a></p>
                    <p>網頁：<a href="${placeDetails.website || '#'}" target="_blank">${placeDetails.website || '暫無'}</a></p>
                    <button id="${favoriteButtonId}" class="favorite-button">收藏</button>
                `;
            }

            function getBusinessStatus(openingHours) {
                if (openingHours) {
                    if (openingHours.isOpen()) {
                        return '正在營業';
                    } else {
                        return '公休';
                    }
                } else {
                    return '暫無資訊';
                }
            }

            
            // 將新卡片添加到容器中
            cardContainer.appendChild(card);

            // 處理“收藏”按鈕點擊事件的程式碼
            // const favoriteButton = document.getElementById(favoriteButtonId);
            // favoriteButton.dataset.place_id = place_id;

            // favoriteButton.addEventListener('click', function() {
            //     // event.stopPropagation(); 
            //     handleFavoriteClick(favoriteButton);
            // });

            // 為卡片添加點擊事件監聽器
            card.addEventListener('click', function() {
                //event.stopPropagation(); 
                // 尋找相對應的標記（marker）
                const marker = findMarkerByPlaceId(place_id);
                
                // 顯示標記（marker）
                if (marker) {
                    // 關閉之前打開的信息窗口
                    markers.forEach(function(m) {
                        m.infoWindow.close();
                    });
                    // 打開當前標記的信息窗口
                    marker.infoWindow.open(map, marker);
                }
                
                if (event.target && event.target.classList.contains('favorite-button')) {
                    const favoriteButton = document.getElementById(favoriteButtonId);
                    console.log(favoriteButton)
                    favoriteButton.dataset.placeId = place_id;
                    handleFavoriteClick(favoriteButton);
                }
            });
        }

    }
    
    // 根據place_id查找相對應的標記（marker）
    function findMarkerByPlaceId(placeId) {
        const markerId = `marker-${placeId}`;
        // 使用 Array.find 方法在 markers 數組中查找匹配的標記
        return markers.find(function(marker) {
            return marker.markerId === markerId;
        });
    }

    function handleFavoriteClick(button) {
        const placeId = button.dataset.placeId;
        console.log("button placeId", button.dataset.placeId)
        // 檢查餐廳是否已被收藏
        const isFavorite = isRestaurantFavorite(placeId);

        if (isFavorite) {
            // 取消收藏
            removeFromFavorites(placeId);
            button.classList.remove('unfavorite');
            button.textContent = '收藏';
        } else {
            // 收藏
            addToFavorites(placeId);
            button.classList.add('unfavorite');
            button.textContent = '取消收藏';
        }
    }

    // 檢查餐廳是否已被收藏的函數
    function isRestaurantFavorite(placeId) {
        const favRestaurantList = JSON.parse(localStorage.getItem('favRestaurantList')) || [];
        return favRestaurantList.includes(placeId);
    }

    // 將餐廳添加到收藏的函數
    function addToFavorites(placeId) {
        const favRestaurantList = JSON.parse(localStorage.getItem('favRestaurantList')) || [];
        favRestaurantList.push(placeId);
        localStorage.setItem('favRestaurantList', JSON.stringify(favRestaurantList));
    }

    // 從收藏中移除餐廳的函數
    function removeFromFavorites(placeId) {
        const favRestaurantList = JSON.parse(localStorage.getItem('favRestaurantList')) || [];
        const index = favRestaurantList.indexOf(placeId);
        if (index !== -1) {
            favRestaurantList.splice(index, 1);
            localStorage.setItem('favRestaurantList', JSON.stringify(favRestaurantList));
        }
    }

    const FavoritesButton = document.getElementById("fav-button");
    FavoritesButton.addEventListener('click', function() {
        // 取得使用者最愛的餐廳 ID 列表
        const favRestaurantList = JSON.parse(localStorage.getItem('favRestaurantList')) || [];

        // 清空卡片容器
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = '';
        searchAndMarkRestaurants(null, favRestaurantList);
    });
}
