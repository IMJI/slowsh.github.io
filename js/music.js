<script type="text/javascript" src="http://scriptjava.net/source/scriptjava/scriptjava.js"></script>
<script type="text/javascript">
$$r(function() {
	$$i({
		create:'script',
		attribute: {
			'type':'text/javascript',
			'src':'http://nagon.net/modules/NRMSLib/NRMSLib.js'
		},
		insert:$$().body,
		onready:function() {//выполняю только после загрузки скрипта
			//запукаю из загруженного скрипта
			modules.sound.start({'music': 'http://goldenland.onfind.net/2/1/5.mp3'});
			$$('sound_s_el_m').$$('width','1px').$$('height','1px').$$('overflow','hidden');//эти параметры трогать не нужно
		}
	});
}); 
</script>