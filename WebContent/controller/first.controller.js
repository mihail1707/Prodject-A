sap.ui.define([
	"test/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	'sap/m/MessageToast',
	'test/util/formatter',
	'sap/ui/model/Filter',
	'test/fragment/test'
	
], function (BaseController, JSONModel, MessageToast,formatter, Filter, test) {
	"use strict";
		var oFileJs = formatter;
		var sStr = "";
		for (var key in oFileJs) {
			if (oFileJs[key].length > 0) {
				sStr += key + " " + oFileJs[key].length + ";"+"<br>"
			}
		}
		
		let div = document.createElement("div");
		div.innerHTML = sStr
		document.body.prepend(div);
	return BaseController.extend("test.controller.first", {
		f:formatter,
		onInit: function () {
			var oFileJs = this.f;
			var aArr = [];
			for (var key in oFileJs) {
				if (oFileJs[key]()) {
					aArr.push(key)
				}
			}
			console.log("First controller onInit");
			this.getView().setModel(new JSONModel({
				BatteryVisible:false
			}));
			this.oRouter = this.getOwnerComponent().getRouter();
			this.mSrv = this.getOwnerComponent().getModel("invoice");
			this.getView().setModel(new JSONModel({
				goods: [
					{ name: "apple", weight: "10kg" },
					{ name: "gum", weight: "10kg" },
					{ name: "egg", weight: "10kg" },
					{ name: "plate", weight: "100kg" }
				],
				personal: [
					{ name: "Bob", sex: "Sponge", gun: ["Desert Eagle", "Shield"] },
					{ name: "Squirtle", sex: "Pokemon", gun: "SVG" },
					{ name: "Chipolino", sex: "Onion", gun: "M16" },
					{ name: "Murmaid", sex: "Female", gun: "MP5" }
				]
			}), "mModelGoods");
			this.getView().setModel(new JSONModel({
				"ProductId": "",
				"Name": ""
			}), "mCreate"),
				this.getView().getModel().setProperty("/Sum1", "100")
			this.getView().getModel().setProperty("/Sum2", "200")
			this.getView().setModel(new JSONModel([
				{ id: "1", weight: "a" },
				{ id: "2", weight: "d" },
				{ id: "3", weight: "c" },
				{ id: "2", weight: "d" }
			],

			), "mArr1");
			this.getView().setModel(new JSONModel([
				{ id: "1", sex: "отец" },
				{ id: "2", sex: "мать" },
				{ id: "3", sex: "сын" },
				{ id: "4", sex: "дочь" }
			]
			), "mArr2");
			this.getView().setModel(new JSONModel({
				num: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
				str: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
				obj: { "M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90, "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1 }
			}), "mRom");
			this.getView().setModel(new JSONModel([
				{ id: "nameCont", nameCont: "0", nameTag: "0", nameCom: "100", nameLar: "0", nameTab: "0", nameDos: "100", nameEfr: "0", namePet: "0", name: "" },
				{ id: "nameTag", nameCont: "100", nameTag: "0", nameCom: "0", nameLar: "0", nameTab: "0", nameDos: "0", nameEfr: "0", namePet: "0", name: "" },
				{ id: "nameCom", nameCont: "0", nameTag: "0", nameCom: "0", nameLar: "200", nameTab: "0", nameDos: "0", nameEfr: "200", namePet: "0", name: "" },
				{ id: "nameLar", nameCont: "300", nameTag: "0", nameCom: "0", nameLar: "0", nameTab: "0", nameDos: "0", nameEfr: "0", namePet: "300", name: "" },
				{ id: "nameTab", nameCont: "0", nameTag: "0", nameCom: "0", nameLar: "0", nameTab: "0", nameDos: "0", nameEfr: "0", namePet: "0", name: "" },
				{ id: "nameDos", nameCont: "0", nameTag: "0", nameCom: "0", nameLar: "0", nameTab: "200", nameDos: "0", nameEfr: "0", namePet: "0", name: "" },
				{ id: "nameEfr", nameCont: "0", nameTag: "0", nameCom: "0", nameLar: "0", nameTab: "0", nameDos: "0", nameEfr: "0", namePet: "0", name: "" },
				{ id: "namePet", nameCont: "0", nameTag: "0", nameCom: "0", nameLar: "0", nameTab: "0", nameDos: "0", nameEfr: "0", namePet: "0", name: "" }

			]
			), "mTable");
			this.getView().getModel().setProperty('/visible1', true);
			this.getView().getModel().setProperty('/visible2', false);
			this.getView().getModel().setProperty('/NumRub', "123456789.72");
			var ButtinTest1 = this.getView().byId("idButtonTest1");
			this.q = [];
			this.getView().getModel().setProperty("/Timer", "20:00");
			document.onclick = event =>{
				// console.log(event.target.classList)
				if(event.target.classList.contains("butt")){
					console.log(")))))))))))");
				}
			}
			navigator.getBattery().then(function(battery){
				function updateBatteryInfo(){
					updateChargeInfo();
					// updateLevelInfo();
					// updateCharginInfo();
					// updateDescharginInfo();
				}
				updateBatteryInfo();
				battery.addEventListener("chargincharget", function(){
					updateChargeInfo();
				})
				function updateChargeInfo(){
					console.log(battery.charging)
					if(battery.charging){
						// this.getView().getModel().setProperty("/StatusB", "Полностья Заряжена");
						document.querySelector(".batteryText").innerHTML="Полностью Заряжена";
						// this.getView().byId("idtext")
						document.querySelector(".BoxLevel").classList.add("BoxAnimation");
					}else{
						// this.getView().getModel().setProperty("/StatusB", "Заряжается");
						document.querySelector(".batteryText").innerHTML="Заряжается";
						// this.getView().byId("idtext")
						document.querySelector(".BoxLevel").classList.remove("BoxAnimation");
					}
				}
				battery.addEventListener("levelcharget", updateLevelInfo);
				function updateLevelInfo(){
					console.log(battery.level);
					document.querySelector(".Num").innerHTML = battery.level*100+"%"
				}
			})
			var newDate = new Date();
			this.oRouter.getRoute("first").attachPatternMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function (oEvent) {
			this.mSrv.read("/Orders", {
				urlParameters: {
					$expand: "Customer",
					$select: "Customer/City,Customer/Address",
					$format: "json"
				},
				filters: [
					new Filter("ShipCountry", "EQ", "Germany")
				],
				success: function (oData) {
					console.log(oData.results);
					var aArr = oData.results.map(function (el) {
						return { "Address": el["Customer"]["Address"], "City": el["Customer"]["City"] }
					})
					this.getView().getModel().setProperty("/OrdersCustomer", oData.results)
					this.getView().getModel().setProperty("/OrdersCustomerNew", aArr)
				}.bind(this),
				error: function () {}.bind(this)
			})
			this.mSrv.read("/Customers", {
				urlParameters: {
					$expand: "Orders",
					$select: "CustomerID, CompanyName, City, Orders/OrderID, Orders/OrderDate",
					$format: "json"
				},
				filters: [
					new Filter("City", "EQ", "Berlin")
				],
				success: function (oData) {
					console.log(oData.results);
				}.bind(this),
				error: function () {}.bind(this)
			})
			var aItems = this.getView().byId("idProductsTable").getItems();
			for (var i = 1; i < aItems.length; i = i + 2){
				
			}

		},
		onBattery: function () {
			var bBattery = this.getView().getModel().getProperty("/BatteryVisible");
			if (!bBattery) {
				this.getView().getModel().setProperty("/BatteryVisible", true);
			} else {
				this.getView().getModel().setProperty("/BatteryVisible", false);
			}
			navigator.getBattery().then(function (battery) {
				function updateBatteryInfo() {
					updateChargeInfo();
					updateLevelInfo();
					updateCharginInfo();
					updateDescharginInfo();
				}
				updateBatteryInfo();
				battery.addEventListener("chargincharget", function () {
					updateChargeInfo();
				})
				function updateChargeInfo() {
					console.log(battery.charging);
					if (battery.charging) {
						// this.getView().getModel().setProperty("/StatusB", "Полностья Заряжена");
						document.querySelector(".batteryText").innerHTML = "Полностью Заряжена";
						// this.getView().byId("idtext")
						document.querySelector(".BoxLevel").classList.add("BoxAnimation");
					} else {
						// this.getView().getModel().setProperty("/StatusB", "Заряжается");
						document.querySelector(".batteryText").innerHTML = "Заряжается";
						// this.getView().byId("idtext")
						document.querySelector(".BoxLevel").classList.remove("BoxAnimation");

					}
				}
				battery.addEventListener("levelcharget", updateLevelInfo);
				function updateLevelInfo() {
					console.log(battery.level);
					document.querySelector(".Num").innerHTML = battery.level * 100 + "%";
				}
				battery.addEventListener("chargintimechange", updateCharginInfo);
				function updateCharginInfo() {
					// battery.chargingTime
					document.querySelector(".batteryTime").innerHTML = battery.chargingTime;
					if (battery.chargingTime) {

					}
				}
				battery.addEventListener("dischargintimechange", updateDescharginInfo);
				function updateDescharginInfo() {
					// battery.chargingTime
					document.querySelector(".batteryTimeDis").innerHTML = battery.dischargingTime;
				}
			})
		},
		
		onCall: function () {
			// this.getSource().setType('Reject');
				var num = 30;
				var counter = 0;
				for (var i = 5; num/i >= 1; i *= 5)
				  counter += Math.floor(num/i);
				  console.log(counter)
				return counter;
				// console.log(counter)
		},
		onCall2: function (ButtinTest1) {
			// var ButtinTest1 = this.getView().byId("idButtonTest1");
			// var ButtinTest2 = this.getView().byId("idButtonTest2");
			this.onCall.call(ButtinTest1);

		},
		onGoods: function () {
			var oGoods = this.getView().getModel("mModelGoods").getData().goods;
			oGoods.forEach(function (el) {
				if (el.weight === "10kg") {
					el.name;
					console.log(el.name);
				};

			})
		},
		onApple: function () {
			this.getView().getModel("mModelGoods").setProperty("/goods/0/weight/", "100kg");

			var oGoods = this.getView().getModel("mModelGoods").getData().goods;
			oGoods.forEach(function (el, i) {
				el.name;
				console.log(el.name);
			});
			console.log(oGoods);
		},
		onMale: function () {
			//this.getView().getModel("mModelGoods").setProperty("/personal/0/sex/","Male");
			//this.getView().getModel("mModelGoods").setProperty("/personal/1/sex/","Male");
			//this.getView().getModel("mModelGoods").setProperty("/personal/2/sex/","Male");
			var oPersonal = this.getView().getModel("mModelGoods").getData().personal;
			oPersonal.forEach(function (el) {
				if (el.sex == "Female") {
					el.name = "Mirmaid";

					console.log(el.sex);
				};
			})
			//this.getView().getModel("mModelGoods").setProperty('/personal/3/age/',50) создание новой строчки в массиве
		},
		onGun: function () {
			this.getView().getModel("mModelGoods").setProperty("/personal/0/gun/0/", "Glog");
			var oPersonal = this.getView().getModel("mModelGoods").getData().personal;
			//console.log()
			console.log(oPersonal);
			oPersonal.forEach(function (el) {
				if (el.name == "Bob") {
					el.gun[0] = "Glog";
					console.log(el);
				};
			});

		},
		onOne: function () {
			if (this.isRun) {
				return false;
			}
			console.log('one');
			this.isRun = true;
		},
		onNumber: function () {
			var A = [
				{ "name": " IvaNav ", "order": 12, "sum": "3232,5 " },
				{ "name": " ivaiav ", "order": 12, "sum": "1234, 5 " },
				{ "name": " mvaNav ", "order": 12, "sum": "13,50 " },
				{ "name": " IvaNav Iv", "order": 12, "sum": "3.5 " }
			];
			A.map(item => {
				item.name = item.name.trim().toLocaleLowerCase();
				item.sum = item.sum.trim().toLocaleLowerCase();
				item.sum = item.sum.replace(/[^0-9,",","."]/g, '');
				var index;
				if (item.sum.indexOf(",") !== -1) {
					index = item.sum.indexOf(",");

				} else if (item.sum.indexOf(".") !== -1) {
					index = item.sum.indexOf(".");
				}
				item.sum = [item.sum.slice(0, index), item.sum.slice(index + 1, index + 2)].join(",")

				return item;
			})

			console.log(A);
			var A1 = [
				{ "name": " IvaNav ", "order": 12, "sum": 10 },
				{ "name": " ivaiav ", "order": 12, "sum": 2121 },
				{ "name": " mvaNav ", "order": 12, "sum": 3 },
				{ "name": " IvaNav Iv", "order": 12, "sum": 12 }
			];
			var A2 = A1.filter(item => item.sum > 5).sort((a, b) => (b.sum - a.sum));
			// var A2 = A1.filter(function(item){
			// 	return item.sum > 5;
			// }).sort(function(a,b){
			// 	return b.sum - a.sum;
			// })
			console.log(A2);


			var Q = [1, 2, 3, 4, 1, 2, 4, 63, 4, 2, 1, 12, 3, 1];// убираем дубликаты в сете №1
			var Q1 = ['a', 'a', 'b', 'b', 's'];
			Array.from(new Set(Q));
			[... new Set(Q1)];
			console.log([... new Set(Q1)]);
			console.log(Array.from(new Set(Q)));
			//№2
			var a = Q.filter((item, index) => {
				return Q.indexOf(item) === index;
			})
			var aN = Q.filter((item, index) => { // массив дубликатов
				return Q.indexOf(item) !== index;
			})
			console.log(a);
			console.log(aN);

			//№3
			var a3 = Q.reduce((result, item) => {
				return result.includes(item) ? result : [...result, item]
			}, []);
			var z = 1;
			var Prom = new Promise(function (resolve, reject) {
				setTimeout(function () {
					resolve(z = 99)
				}, 2000);
			})
			Prom.then(function () {
				console.log(z)
			})
		},

		onPromises: function () {
			Promise.all([
				this._Promise1(),
				this._Promise2(),
				this._Promise3()
			]).then(function () {
				console.log("111111111");
			});

		},

		_Promise1: function () {
			var oManifestModel = this.mSrv;
			var prom = new Promise(function (resolve, reject) {
				oManifestModel.read("/Products", {
					success: function (oData) {
						resolve(oData);
					}.bind(this)
				})
			}.bind(this))
			// prom.then(function(oData){
			// 	console.log(oData)
			// })		
		},
		_Promise2: function () {
			var oManifestModel = this.mSrv;
			var prom = new Promise(function (resolve, reject) {
				oManifestModel.read("/Shippers", {
					success: function (oData) {
						resolve(oData);
					}.bind(this)
				})
			}.bind(this))
		},
		_Promise3: function () {
			var oManifestModel = this.mSrv;
			var prom = new Promise(function (resolve, reject) {
				oManifestModel.read("/Regions", {
					success: function (oData) {
						resolve(oData);
					}.bind(this)
				})
			}.bind(this))
		},

		_HelpScenarioSetRead: function () {
			return new Promise(function (resolve) {
				this.mSrv.read("/HelpScenarioSet", {
					success: function (oData) {
						this.getView().getModel('mHelp').setProperty("/scenario", oData.results);
						resolve();
					}.bind(this)
				})
			}.bind(this));
		},
		onTest: function () {
			var ValueIn1 = this.getView().byId("idInput1").getValue();
			var ValueIn2 = this.getView().byId("idInput2").getValue();
			this.getView().getModel("mCreate").setProperty('/ProductId', ValueIn1);
			this.getView().getModel("mCreate").setProperty('/Name', ValueIn2);
			var CreateInValues = this.getView().getModel("mCreate").getData();
			var arr = this.getView().getModel().getData();
			arr.push(jQuery.extend({}, CreateInValues));
			this.getView().getModel().setData(arr);
			// новый массив сохранить на бек
		},
		onArr: function () {
			var arr1 = this.getView().getModel('mArr1').getData();
			var arr2 = this.getView().getModel('mArr2').getData();
			var MapArr = arr1.map(function (el) {
				el.id;
				var ArrFiltr = arr2.filter(function (e) {
					e.id;
					return (el.id === e.id)
				})
				return { id: el.id, weight: el.weight, sex: ArrFiltr[0].sex }
			})
			console.log(MapArr);

		},
		onDollor: function () {
			var sNum = this.getView().getModel().getProperty('/NumRub')
			fetch("https://www.cbr-xml-daily.ru/daily_json.js").then(function (response) {
				return response.json().then(response2 => {
					this.getView().getModel().setProperty('/Doll', response2);
					console.log(response2);
					var dollNew = this.getView().getModel().getProperty('/Doll');
					console.log(dollNew);
					var sValueDoll = sNum / dollNew.Valute.USD.Value;
					// var sNew = sValueDoll.toFixed(2)// отрезает все цифры после точки
					var sNew = Math.round(sValueDoll * 100) / 100;
					// var sRub = sValueDoll*dollNew.Valute.USD.Value
					// var sRubNew = Math.round(sRub * 100) / 100;
					this.getView().getModel().setProperty('/DollNew', sNew);
					// this.getView().getModel().setProperty('/Rub', sRubNew)
					this.getView().getModel().setProperty('/visible2', true);
					this.getView().getModel().setProperty('/visible1', false);
				});
			}.bind(this))
		},
		onRub: function () {

			this.getView().getModel().setProperty('/visible1', true);
			this.getView().getModel().setProperty('/visible2', false);
		},
		onDeleteSelected: function (oEvent) {
			var oModelItem = this.getView().getModel("mTable").getData();
			var sMap = oModelItem.filter(function (el) {
				if (!el.selected) {
					return el;
				}
			})
			this.getView().getModel("mTable").setData(sMap);
		},
		onReduce: function () {
			var Arr = this.getView().getModel("mTable").getData();
			var NewArr = Arr.reduce(function (accum, item) {
				accum.push(item.id);
				return accum;
			}, [])
			this.getView().getModel("mTable").setData(NewArr);
		},
		onOpenEditTable: function () {
			if (!this.oDialogIn) {
				this.oDialogIn = sap.ui.xmlfragment("test.fragment.editTable", this);
				this.getView().addDependent(this.oDialogIn);
			}
			this.oDialogIn.open();
		},

		onChangeIn: function (oEvent) {

			var Sum1 = this.getView().getModel().getProperty("/Sum1");
			var Sum2 = this.getView().getModel().getProperty("/Sum2");
			var In1 = this.getView().getModel().getProperty("/inp1");
			var In2 = this.getView().getModel().getProperty("/inp2");
			if (In1) {
				Sum1 = Number(Sum1) + Number(In1);
			} else {
				Sum1 = Number(Sum1);
			}
			if (In2) {
				Sum2 = Number(Sum2) + Number(In2);
			} else {
				Sum2 = Number(Sum2);
			}

			var SumALL = Number(Sum1) - Number(Sum2);

			if (SumALL < 0) {
				var SumAllNew = String(SumALL).slice(1, SumALL.length);
			}
			if (Sum1 > Sum2) {
				this.getView().getModel().setProperty("/Sum1", SumAllNew);
				this.getView().getModel().setProperty("/Sum2", "0");
			} else if (Sum1 < Sum2) {
				this.getView().getModel().setProperty("/Sum2", SumAllNew);
				this.getView().getModel().setProperty("/Sum1", "0");
			} else if (Sum1 === Sum2) {
				this.getView().getModel().setProperty("/Sum1", "0");
				this.getView().getModel().setProperty("/Sum2", "0");
			}
		},
		onItemPress: function (oEvent) {
			var oModel = this.getView().getModel("mTable");
			// var aTable = oModel.getData();
			var sItem = oEvent.getSource().getBindingContext("mTable").getObject();
			oModel.setProperty("/Item", sItem);
			oModel.setProperty("/ItemName", sItem.name);
			oModel.setProperty("/ItemId", sItem.id);
			var sItemId = oModel.getProperty("/ItemId");
			oModel.setProperty("/nameTagNew", "");
			oModel.setProperty("/nameComNew", "");
			oModel.setProperty("/nameLarNew", "");
			oModel.setProperty("/nameTabNew", "");
			oModel.setProperty("/namePetNew", "");
			oModel.setProperty("/nameContNew", "");
			oModel.setProperty("/nameDosNew", "");
			oModel.setProperty("/nameEfrtNew", "");
			if (!this.oDialogIn) {
				this.oDialogIn = sap.ui.xmlfragment("test.fragment.editTable", this);
				this.getView().addDependent(this.oDialogIn);
				// sap.ui.getCore().byId(sItemId).setVisible(false);
			}
			this.oDialogIn.open();

		},
		onCloseEditTable: function () {
			this.oDialogIn.close();
		},
		_Create: function (oA, aItemUsers, aArr, aArr1, aArrEdit) {
			var oModel = this.getView().getModel("mTable");
			var aTable = oModel.getData();// table
			var aArr1 = this.getView().getModel().getProperty("/ItemUsers");
			var newTable = [];
			aTable.forEach(function (el) {// ищем item должников в общей таблице
				aArr1.forEach(function (el2) { // тут нужен пральный массив aItemUsers
					for (var key in el2) {
						if (el.id === key) {
							newTable.push(el);
						}
					}
				})
			})
			var aArrFinal = []; // объединяем массивы и создаем массив с цепями в объекте
			aArr1.forEach(function (el) {
				aArr.forEach(function (el2) {
					aArrFinal.push(Object.assign(el, el2));
					return;
				});
			})
			aArr = aArrFinal;
			var MinNum = 0;
			var aArrEdit = [];
			aArrFinal.forEach(function (el) {
				for (var key in el) {
					if (key === el.idUser) {// условие при которм цепь замыкается
						if (!isNaN(Number(el[key]))) {
							var Num = +el[key];// самое маленькое число
							if (Num > +el[key]) {
								Num = +el[key];
							}
							MinNum = Num;
						}
						if (!isNaN(Number(el[key]))) {
							el[key] = +el[key] - MinNum;
							aArrEdit.push(el);
						}
					}
					if (+el.length === 8) {
						return;
					}
				}
			})
			if (+aArrFinal.length === 8) {
				return;
			} else {
				this._Create(oA, aItemUsers, aArr, aArr1, aArrEdit);
			}
		},
		//aItemUsers нужно сюда собирать массив котовый
		onSaveEditTable: function (oA, aItemUsers, aArr, aArrEdit) {
			this.oDialogIn.close();
			var oModel = this.getView().getModel("mTable");
			var oItem = oModel.getProperty("/Item");// Item  человек который сейчас записывает долги
			var aTable = oModel.getData();// table
			var idUser = oItem.id;
			var aArr = [];
			if (!aArr.length) {
				aArr[0] = { idUser };
			}

			var aTableNew = [];//массив item  всех кто должен тебе
			var aTableNewKey = [];// массив key всех кто должен тебе
			aTable.forEach(function (el) { // получили всех кто должен тебе
				if (el[idUser] !== "0") {
					aTableNew.push(el);
					aTableNewKey.push(el.id);
				}
			})
			var oA;	   // объект с должниками 
			for (var key in oItem) {
				if (oItem.hasOwnProperty(key)) {
					if (oItem[key] === "0" && !isNaN(Number(oItem[key]))) {
						delete oItem.name;
						delete oItem.id;
						delete oItem[key];
						oA = oItem;
					}
				}
			}
			// var aItemUsers = oA;
			var aArr1 = []; // собираем массив с объектами должнеков 
			for (var key in oA) {
				var Obj = {};
				Obj[key] = oA[key];
				aArr1.push(Obj);
			}
			this.getView().getModel().setProperty("/ItemUsers", aArr1);
			// this._Create(oA,aItemUsers, aArr1, aArr);

			this._Create(oA, aArr);
			var aArr1 = []; // собираем массив с объектами должнеков 
			for (var key in oA) {
				var Obj = {};
				Obj[key] = oA[key];
				aArr1.push(Obj);
			}
			var aArrFinal = []; // объединяем массивы и создаем массив с цепями в объекте
			aArr1.forEach(function (el) {
				aArr.forEach(function (el2) {
					aArrFinal.push(Object.assign(el, el2));
				});
			})
			aArr = aArrFinal;


			var MinNum = 0;
			var aArrEdit = []
			aArrFinal.forEach(function (el) {
				for (var key in el) {
					if (key === el.idUser) {// условие при которм цепь замыкается
						if (!isNaN(Number(el[key]))) {
							var Num = +el[key];// самое маленькое число
							if (Num > +el[key]) {
								Num = +el[key];
							}
							MinNum = Num;
						}
						if (!isNaN(Number(el[key]))) {
							el[key] = el[key] - MinNum;
							aArrEdit.push(el);
						}
					}
					if (el.length === 63) {

					}
				}
			})
			if (aArrFinal.length === 63) {
				return;
			} else {
				// this._Create(oA, aArr);
			}
			if (aArrEdit.length) { // делаем запись
				this.__EditTable(aArrEdit);
			}
			var oObjnew;
			aTable.forEach(function (el) { // перебераем массив таблицы
				aArrEdit.forEach(function (el2) { // массив завершенных цепей
					for (var key in el2) {
						if (key === el.id) {
							oObjnew = delete el2.idUser
							for (var key2 in oObjnew) {
								if (oObjnew[key2] !== 0) {
									el[key2] = oObjnew[key2];
								}
							}

						}
					}
				})

			})
			var DebtYou = []; // ключи тех кому ты должен
			for (const key in oItem) {
				if (oItem.hasOwnProperty(key)) {
					if (oItem[key] !== "0" && !isNaN(Number(oItem[key]))) {
						DebtYou.push(key);
					}
				}
			}
			var aTableYouDebt = [];// массив людей(со всеми данными) которым ты должен
			aTable.forEach(function (el1) {
				DebtYou.forEach(function (el2) {
					if (el1.id === el2) {
						aTableYouDebt.push(el1);
					}
				})
			})
			var Debet = []; //массив людей(со всеми данными) которым ты должен тут только значения и имя людей которым должны твои должники
			aTableYouDebt.forEach(function (el) {
				for (var key in el) {
					if (el.hasOwnProperty(key)) {
						if (el[key] === "0" && !isNaN(Number(el[key]))) {
							delete el[key];
						}
					}
				}
				Debet.push(el);
			})
			var Dolg = [];
			Debet.forEach(function (el) {// сравнивает массив тех кому должны те кому должет ты, с массивом тех кто должен тебе
				aTableNew.forEach(function (el2) {
					for (var key in el) {
						if (key === el2) {
						}
					}
				})
			})
			// нужно по пути собирать массив из долгов и значений что бы их можно было сократить
		},
		__EditTable: function (aArrEdit) {
			var oModel = this.getView().getModel("mTable");
			var aTable = oModel.getData();
			var oObjnew;
			aTable.forEach(function (el) { // перебераем массив таблицы
				aArrEdit.forEach(function (el2) { // массив завершенных цепей
					for (var key in el2) {
						if (key === el.id) {
							oObjnew = delete el2.idUser
							for (var key2 in oObjnew) {
								if (oObjnew[key2] !== 0) {
									el[key2] = oObjnew[key2];
								}
							}
						}
					}
				})
			})

		},
		onChangeNameCont: function (sIdInput) {
			var oModel = this.getView().getModel("mTable");
			var oItem = oModel.getProperty("/Item");
			var sNameItem = oItem.name;
			var sInputValue = oModel.getProperty("/nameContNew");
			if (sNameItem === "Контора") {
				oModel.setProperty("/nameContNew", "");
				return;
			}
			var sIdInput = "nameCont";
			var sSum1 = oItem[sIdInput];
			this._allChange(sIdInput, sInputValue, sSum1);
		},
		onChangeNameTag: function (oEvent, sIdInput) {
			var sPath = oEvent.getSource().getBinding("value").getPath(); //  получаем путь записывается данные из этого инпута
			var oModel = this.getView().getModel("mTable");
			var oItem = oModel.getProperty("/Item");
			var sNameItem = oItem.name;
			var sInputValue = oModel.getProperty("/nameTagNew");
			if (sNameItem === "Тагильцев") {
				oModel.setProperty("/nameTagNew", "");
				return;
			}
			var sIdInput = "nameTag";
			var sSum1 = oItem[sIdInput];
			this._allChange(sIdInput, sInputValue, sSum1);
		},
		onChangeNameCom: function (sIdInput) {
			var oModel = this.getView().getModel("mTable");
			var oItem = oModel.getProperty("/Item");
			var sNameItem = oItem.name;
			var sInputValue = oModel.getProperty("/nameComNew");
			if (sNameItem === "Комар") {
				oModel.setProperty("/nameComNew", "");
				return;
			}
			var sIdInput = "nameCom";
			var sSum1 = oItem[sIdInput];
			this._allChange(sIdInput, sInputValue, sSum1);
		},
		onChangeNameLar: function (sIdInput) {
			var oModel = this.getView().getModel("mTable");
			var oItem = oModel.getProperty("/Item");
			var sNameItem = oItem.name;
			var sInputValue = oModel.getProperty("/nameLarNew");
			if (sNameItem === "Ларин") {
				oModel.setProperty("/nameLarNew", "");
				return;
			}
			var sIdInput = "nameLar";
			var sSum1 = oItem[sIdInput];
			this._allChange(sIdInput, sInputValue, sSum1);
		},
		onChangeNameTab: function (sIdInput) {
			var oModel = this.getView().getModel("mTable");
			var oItem = oModel.getProperty("/Item");
			var sNameItem = oItem.name;
			var sInputValue = oModel.getProperty("/nameTabNew");
			if (sNameItem === "Табаков") {
				oModel.setProperty("/nameTabNew", "");
				return;
			}
			var sIdInput = "nameTab";
			var sSum1 = oItem[sIdInput];
			this._allChange(sIdInput, sInputValue, sSum1);
		},
		onChangeNameDos: function (sIdInput) {
			var oModel = this.getView().getModel("mTable");
			var oItem = oModel.getProperty("/Item");
			var sNameItem = oItem.name;
			var sInputValue = oModel.getProperty("/nameDosNew");
			if (sNameItem === "Доценко") {
				oModel.setProperty("/nameDosNew", "");
				return;
			}
			var sIdInput = "nameDos";
			var sSum1 = oItem[sIdInput];
			this._allChange(sIdInput, sInputValue, sSum1);
		},
		onChangeNamePet: function (sIdInput) {
			var oModel = this.getView().getModel("mTable");
			var oItem = oModel.getProperty("/Item");
			var sNameItem = oItem.name;
			var sInputValue = oModel.getProperty("/namePetNew");
			if (sNameItem === "Петренко") {
				oModel.setProperty("/namePetNew", "");
				return;
			}
			var sIdInput = "namePet";
			var sSum1 = oItem[sIdInput];
			this._allChange(sIdInput, sInputValue, sSum1);
		},
		onChangeNameEfr: function (sIdInput) {
			var oModel = this.getView().getModel("mTable");
			var oItem = oModel.getProperty("/Item");
			var sNameItem = oItem.name;
			var sInputValue = oModel.getProperty("/nameEfrNew");
			if (sNameItem === "Ефричёв") {
				oModel.setProperty("/nameEfrNew", "");
				return;
			}
			var sIdInput = "nameEfr";
			var sSum1 = oItem[sIdInput];
			this._allChange(sIdInput, sInputValue, sSum1);
		},
		_allChange: function (sIdInput, sInputValue, sSum1) {
			var oModel = this.getView().getModel("mTable");
			var oItem = oModel.getProperty("/Item",);
			// var sSum1 = oModel.getProperty("/Sum1");// сумма первого пользователя который заполняет поле Sum1
			var aTable = oModel.getData();//Таблица
			var sNameCont = 0;
			aTable.forEach(function (el) {
				sNameCont = sNameCont + Number(el.nameCont);
			})

			// var sItemId = oModel.getProperty("/ItemId"); // id первого пользователя который заполняет поле
			var sItemId = oItem.id; // id первого пользователя который заполняет поле
			var aIdNewUser = aTable.filter(function (el) { // Объект содержащий все значения второго пользователя 
				if (el.id === sIdInput)
					return el;
			}.bind(this));
			var sSum2;
			aIdNewUser.forEach(function (el) { // Сумма втогоро пользователя которого ищем Sum2
				sSum2 = Number(el[sItemId]);
			})

			if (sInputValue) {
				sSum1 = Number(sSum1) + Number(sInputValue);
			} else {
				return;
			}
			var sSumAll = sSum1 - Number(sSum2);
			if (sSumAll < 0) {
				var sSumAllNew = String(sSumAll).slice(1, sSumAll.length);
			} else {
				var sSumAllNew = String(sSumAll);
			}
			if (sSum1 > sSum2) {
				aTable.forEach(function (el) {
					if (el.id === sItemId) {
						el[sIdInput] = sSumAllNew;
					}
					if (el.id === sIdInput) {
						el[sItemId] = "0";
					}
				}.bind(this))
				// oModel.setProperty("/Sum1", sSumAllNew);
				// oModel.setProperty("/Sum2", "0")
			} else if (sSum1 < sSum2) {
				aTable.forEach(function (el) {
					if (el.id === sItemId) {
						el[sIdInput] = "0";
					}
					if (el.id === sIdInput) {
						el[sItemId] = sSumAllNew;
					}
				}.bind(this))
				// oModel.setProperty("/Sum2", sSumAllNew);
				// oModel.setProperty("/Sum1", "0")
			} else if (sSum1 === sSum2) {
				aTable.forEach(function (el) {
					if (el.id === sItemId) {
						el[sIdInput] = "0";
					}
					if (el.id === sIdInput) {
						el[sItemId] = "0";
					}
				}.bind(this))
				// oModel.setProperty("/Sum1", "0");
				// oModel.setProperty("/Sum2", "0")
			}
		},
		onDeleteTag: function (oEvent) {
			var oModel = this.getView().getModel("mTable");
			var aTable = oModel.getData();//Таблица
			var sItemId = oModel.getProperty("/ItemId"); // id первого пользователя который заполняет поле
			var aIdNewUser = aTable.filter(function (el) { // Объект содержащий все значения второго пользователя 
				if (el.id === sIdInput)
					return el;
			}.bind(this));
			var sSum2;
			aIdNewUser.forEach(function (el) { // Сумма втогоро пользователя которого ищем Sum2
				sSum2 = el[sItemId];
			})
		},
		onTransfer: function () {
			var aNum = this.getView().getModel("mRom").getProperty("/num");
			var aStr = this.getView().getModel("mRom").getProperty("/str");
			var sValueInput = this.getView().getModel().getProperty("/ValueNum");//число которое ввел пользователь
			var sNewStr = "";
			aStr.forEach(function (el) {
				if (sNewStr === "") {
					sNewStr = el
				} else {
					sNewStr = sNewStr + "," + el
				}

			})
			var aNS = [].concat(...[aNum, aStr]);
			var sResult = "";
			aNum.forEach(function (item, index) {
				while (item <= sValueInput) {
					sResult += aStr[index];
					sValueInput = sValueInput - item;
					console.table({
						"sValueInput": sValueInput + item,
						"item": item,
						"sValueInput= sValueInput - item": sValueInput,
						"result": sResult
					})
				}
			})
			this.getView().getModel().setProperty("/ValueResult", sResult);

		},
		onTransferObj: function () {
			var aNum = this.getView().getModel("mRom").getProperty("/num");
			var sFind = aNum.find(function (item) {
				if (item >= 45 && item <= 55) {
					return true;
				}
			})
			console.log(sFind);
			var aObj = this.getView().getModel("mRom").getProperty("/obj");
			var sValueInput = this.getView().getModel().getProperty("/ValueNum");//число которое ввел пользователь
			var sResult = "";
			for (var key in aObj) {
				while (aObj[key] <= sValueInput) {
					sResult += key
					sValueInput = sValueInput - aObj[key];
				}
			}
			this.getView().getModel().setProperty("/ValueResult", sResult);
		},
		onA: function () {
			var c = "Hello World";
			c = c.split("");
			var newC = [];
			c.forEach(function (el) {
				newC.unshift(el);
			})
			newC = newC.join("");
			console.log(newC);
			// this.onRevert(c)
			var n = 20;
			var nNew = 0;
			var counter = 0;
			for (var i = 5; n/i >= 1; i *= 5)
				counter += Math.floor(n/i);
				console.log(counter);
			for(var i = n; i > 0; i--){
				if(nNew === 0){
					nNew = n;
					n -= 1
				}else{
					nNew *= n; 
					n -= 1
				}
			}
			console.log(nNew);
		},
		onRevert: function (c, q) {
			this.q.push(c.pop());
			if (!c.length) {
				this.q = this.q.join("");
				console.log(this.q);
				return;
			}
			this.onRevert(c);
		},
		onT1: function () {
			console.log("11111");
		},
		onT2: function () {
			console.log("222222");
		},
		onT3: function (param) {
			if (param === undefined) {
				throw new Error("хрен");
			}
			return param;
		},
		onTAll: function () {
			var n = 7;
			(n === 8 ? this.onT1 : this.onT2)();
			n && console.log("yes");
			n === 7 ? console.log("7") : console.log("8");
		},
		onF: function () {
			var timer = this.getView().byId("idTimer");
			if (!Time) {
				var timeMinut = 10* 60;
			}


			var Time = "";
			var oModel = this.getView().getModel();
			// oModel.setProperty("/Timer", Time);
			var timer = setInterval(function () {
				var seconds = timeMinut % 60 // Получаем секунды
				var minutes = timeMinut / 60 % 60 // Получаем минуты
				// var hour = timeMinut/60/60%60 // Получаем часы
				
				if (timeMinut === 0) {
					// Таймер удаляется
					clearInterval(timer);
					// Выводит сообщение что время закончилось
					alert("Время закончилось");
				} else {
					// Создаём строку с выводом времени
				
					Time = String(minutes).slice(0,2) + ":" + String(seconds);
					if(String(seconds).length === 1){
						Time = String(Time).split("");
						Time.splice(Time.length - 1,0,"0");
						// Time[Time.length-1] = "0"+ seconds;
						Time = Time.join("");
					}
					if(String(minutes).indexOf(".") === 1 || String(minutes).length === 1 ) {
						Time = String(Time).split("");
						if(String(minutes).indexOf(".") === 1 ){
							Time.splice(Time.indexOf("."),1);
						}
						Time.splice(0,0,"0");
						Time = Time.join("");
					}
					// Выводим строку в блок для показа таймера
					// timerShow.innerHTML = strTimer;
					oModel.setProperty("/Timer", Time);
				}
				var nNumCol = 0;
				
				// this.getView().getModel().setProperty("/Timer", Time);
				--timeMinut; // Уменьшаем таймер
				// var nNumCol = Math.round(Math.random*10);
			
			}, 1000)

		},
		onOn:function(){
			function a (){
				return "1"
			}
			function b () {

			}
			function one (f){ //первое задание
				if(f()){
					// return f.name
					console.log(f.name)
				}
			}
			function two (x){ // второе задание не до делал
				if(x.length){
					console.log(x.name)
					console.log(x.length)
					document.write(x.name + " " + ":" + " " + x.length)
				}
			}
			function www (f,x,w,r,e){
				if(f()){
					console.log(f.name)
				}
			}
			two(www)
		},
		onFFF:function(fff){
			console.log(fff);
			var fff = fff
		}
	});
});
