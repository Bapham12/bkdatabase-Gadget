(function(mw) {
	'use strict';
	// i18n source
	const i18nSource = {
		"en": {
		"show": "Show redirects",
		"hide": "Hide redirects"
	},
	"an": {
		"show": "Amostrar endreceras",
		"hide": "Amagar endreceras"
	},
	"ar": {
		"show": "أظهر التحويلات",
		"hide": "أخفِ التحويلات"
	},
	"as": {
		"show": "পুনঃনিৰ্দেশ দেখুৱাওক",
		"hide": "পুনঃনিৰ্দেশ লুকুৱাওক"
	},
	"ast": {
		"show": "Amosar redireiciones",
		"hide": "Anubrir redireiciones"
	},
	"be": {
		"show": "Паказаць перанакіраваньні",
		"hide": "Схаваць перанакіраваньні"
	},
	"be-tarask": {
		"show": "Паказаць перанакіраваньні",
		"hide": "Схаваць перанакіраваньні"
	},
	"bg": {
		"show": "Показване пренасочвания",
		"hide": "Скриване пренасочвания"
	},
	"br": {
		"show": "Diskouez an adkasoù",
		"hide": "Kuzhat an adkasoù"
	},
	"bs": {
		"show": "Prikaži preusmjerenja",
		"hide": "Sakrij preusmjerenja"
	},
	"ca": {
		"show": "Mostra les redireccions",
		"hide": "Amaga les redireccions"
	},
	"ce": {
		"show": "Къайлаяха дӀасахьажораш",
		"hide": "Къайлаяха дӀасахьажийнарш"
	},
	"co": {
		"show": "Mustrà redirect",
		"hide": "Piattà redirect"
	},
	"cs": {
		"show": "Zobrazit přesměrování",
		"hide": "Skrýt přesměrování"
	},
	"da": {
		"show": "Vis omdirigeringer",
		"hide": "Skjul omdirigeringer"
	},
	"de": {
		"show": "Weiterleitungen anzeigen",
		"hide": "Weiterleitungen ausblenden"
	},
	"el": {
		"show": "Εμφάνιση ανακατευθύνσεων",
		"hide": "Απόκρυψη ανακατευθύνσεων"
	},
	"eo": {
		"show": "Montri alidirektilojn",
		"hide": "Kaŝi alidirektilojn"
	},
	"es": {
		"show": "Mostrar redirecciones",
		"hide": "Ocultar redirecciones"
	},
	"et": {
		"show": "Kuva ümbersuunamised",
		"hide": "Peida ümbersuunamised"
	},
	"eu": {
		"show": "Erakutsi birzuzenketak",
		"hide": "Ezkutatu birzuzenketak"
	},
	"ext": {
		"show": "Muestral redirecionis",
		"hide": "Açonchal redirecionis"
	},
	"fi": {
		"show": "Näytä uudelleenohjaukset",
		"hide": "Piilota uudelleenohjaukset"
	},
	"fo": {
		"show": "Vis umdirigeringar",
		"hide": "Goym umdirigeringar"
	},
	"fr": {
		"show": "Afficher les redirections",
		"hide": "Masquer les redirections"
	},
	"fy": {
		"show": "Synonimen werjaan",
		"hide": "Synonimen ferbergje"
	},
	"gl": {
		"show": "Amosar redireccións",
		"hide": "Agochar redireccións"
	},
	"he": {
		"show": "הצגת הפניות",
		"hide": "הסתרת הפניות"
	},
	"hi": {
		"show": "अनुप्रेषण दिखाएँ",
		"hide": "अनुप्रेषण छिपाएँ"
	},
	"hr": {
		"show": "Prikaži preusmjerenja",
		"hide": "Sakrij preusmjerenja"
	},
	"hu": {
		"show": "Átirányítások mutatása",
		"hide": "Átirányítások elrejtése"
	},
	"hy": {
		"show": "Ցուցադրել վերահղումները",
		"hide": "Թաքցնել վերահղումները"
	},
	"id": {
		"show": "Tampilkan pengalihan",
		"hide": "Sembunyikan pengalihan"
	},
	"is": {
		"show": "Sýna tilvísanir",
		"hide": "Fela tilvísanir"
	},
	"it": {
		"show": "Mostra redirect",
		"hide": "Nascondi redirect"
	},
	"ja": {
		"show": "リダイレクトを表示",
		"hide": "リダイレクトを非表示"
	},
	"ka": {
		"show": "გადამისამართებების ჩვენება",
		"hide": "გადამისამართებების დამალვა"
	},
	"ko": {
		"show": "넘겨주기 표시",
		"hide": "넘겨주기 숨기기"
	},
	"la": {
		"show": "Monstrare redirectiones",
		"hide": "Celare redirectiones"
	},
	"lb": {
		"show": "Viruleedunge weisen",
		"hide": "Viruleedunge verstoppen"
	},
	"lv": {
		"show": "Parādīt pāradresācijas",
		"hide": "Slēpt pāradresācijas"
	},
	"mk": {
		"show": "Прикажи пренасочувања",
		"hide": "Скриј пренасочувања"
	},
	"mo": {
		"show": "Аратэ редирекционэриле",
		"hide": "Аскунде редирекционэриле"
	},
	"ms": {
		"show": "Paparkan lencongan",
		"hide": "Sorokkan lencongan"
	},
	"nl": {
		"show": "Doorverwijzingen weergeven",
		"hide": "Doorverwijzingen verbergen"
	},
	"nn": {
		"show": "Vis omdirigeringar",
		"hide": "Gøym omdirigeringar"
	},
	"no": {
		"show": "Vis omdirigeringer",
		"hide": "Skjul omdirigeringer"
	},
	"oc": {
		"show": "Far veire las redireccions",
		"hide": "Amagar las redireccions"
	},
	"pl": {
		"show": "Pokaż przekierowania",
		"hide": "Ukryj przekierowania"
	},
	"pt": {
		"show": "Mostrar redireccionamentos",
		"hide": "Ocultar redireccionamentos"
	},
	"pt-br": {
		"show": "Mostrar redirecionamentos",
		"hide": "Ocultar redirecionamentos"
	},
	"ro": {
		"show": "Arată redirecţionările",
		"hide": "Ascunde redirecţionările"
	},
	"ru": {
		"show": "Показать перенаправления",
		"hide": "Скрыть перенаправления"
	},
	"sc": {
		"show": "Ammustra is reindiritzamentos",
		"hide": "Cua is reindiritzamentos"
	},
	"sk": {
		"show": "Zobraziť presmerovania",
		"hide": "Skryť presmerovania"
	},
	"sl": {
		"show": "Prikaži preusmeritve",
		"hide": "Skrij preusmeritve"
	},
	"sq": {
		"show": "Trego percjelljet",
		"hide": "Fshih percjelljet"
	},
	"sr-ec": {
		"show": "Прикажи преусмерења",
		"hide": "Сакриј преусмерења"
	},
	"sr-el": {
		"show": "Prikaži preusmerenja",
		"hide": "Sakrij preusmerenja"
	},
	"sv": {
		"show": "Visa omdirigeringar",
		"hide": "Dölj omdirigeringar"
	},
	"te": {
		"show": "దారిమార్పులను చూపించు",
		"hide": "దారిమార్పులను దాచు"
	},
	"th": {
		"show": "แสดงการเปลี่ยนเส้นทาง",
		"hide": "ซ่อนการเปลี่ยนเส้นทาง"
	},
	"tr": {
		"show": "Yönlendirmeleri göster",
		"hide": "Yönlendirmeleri gizle"
	},
	"uk": {
		"show": "Показати перенаправлення",
		"hide": "Сховати перенаправлення"
	},
	"val": {
		"show": "Mostrar redireccions",
		"hide": "Amagar redireccions"
	},
	"vi": {
		"show": "Xem trang đổi hướng",
		"hide": "Ẩn trang đổi hướng"
	},
	"zh-hans": {
		"show": "显示重定向页面",
		"hide": "隐藏重定向页面"
	},
	"zh-hant": {
		"show": "顯示重新導向頁面",
		"hide": "隱藏重新導向頁面"
	},
	"zh-hk": {
		"show": "顯示重新導向頁面",
		"hide": "隱藏重新導向頁面"
	},
	"zh-tw": {
		"show": "顯示重新導向頁面",
		"hide": "隱藏重新導向頁面"
	}
   };
   
    // lấy ngôn ngữ người dùng
  var lang = mw.config.get('wgUserLanguage') || 'en';
  if (!i18nSource[lang]) lang = 'en';

  var msg = i18nSource[lang];

	if (
		['Allpages', 'Prefixindex'].indexOf(mw.config.get('wgCanonicalSpecialPageName')) === -1 ||
		window.AllPagesHideRedirectLoaded
	) {
		return;
	}
	window.AllPagesHideRedirectLoaded = true;

	var sheet, button, labelSpan;

	function update() {
		sheet.disabled = !sheet.disabled;
		labelSpan.textContent = sheet.disabled ? msg.show : msg.hide;
	}

	function init() {
		sheet = mw.util.addCSS('.allpagesredirect { display: none; }');

		// Create the wrapper span
		var wrapper = document.createElement('span');
		wrapper.id = 'toggle-redirects-button';
		wrapper.className = 'mw-htmlform-submit oo-ui-widget oo-ui-widget-enabled oo-ui-inputWidget oo-ui-buttonElement oo-ui-buttonElement-framed oo-ui-labelElement oo-ui-flaggedElement-primary oo-ui-flaggedElement-progressive oo-ui-buttonInputWidget';
		wrapper.setAttribute('data-ooui', JSON.stringify({
			_: "OO.ui.ButtonInputWidget",
			type: "button",
			value: "Show Redirects",
			label: "Show Redirects",
			flags: ["primary", "progressive"],
			classes: ["mw-htmlform-submit"]
		}));

		// Create the actual button
		button = document.createElement('button');
		button.type = 'button';
		button.tabIndex = 0;
		button.value = 'Show Redirects';
		button.className = 'oo-ui-inputWidget-input oo-ui-buttonElement-button webfonts-changed';
		button.innerHTML = `
			<span class="oo-ui-iconElement-icon oo-ui-iconElement-noIcon oo-ui-image-invert"></span>
			<span class="oo-ui-labelElement-label">Show Redirects</span>
			<span class="oo-ui-indicatorElement-indicator oo-ui-indicatorElement-noIndicator oo-ui-image-invert"></span>
		`;

		labelSpan = button.querySelector('.oo-ui-labelElement-label');
		button.addEventListener('click', update);

		// Append button into wrapper
		wrapper.append(button);

		// Append wrapper into the form area
		var target = document.getElementsByClassName('mw-htmlform-submit-buttons')[0];
		if (target) {
			target.append(wrapper);
		}
	}

	mw.loader.using('mediawiki.util').then(init);
})(window.mediaWiki);
