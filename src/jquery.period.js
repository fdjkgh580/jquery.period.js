(function ( $ ) {

    /**
     * 批次讓元素間隔時間執行
     * @param  {int}   delayTimes 延遲的時間
     * @param  {callable} callback   對物件執行的動作
     */
    $.fn.period = function (delayTimes, callback){
        
        var _total      = $(this).length,
            _collection = $(this),
            _delayTimes = delayTimes,
            _callback   = callback;

        var loop = function (startIndex){

            // 取得元素
            var target = _collection.get(startIndex);

            // 執行回呼，當等於 false 將會中斷前往下一個元素
            var result = _callback.call(target, startIndex);

            if (result === false) return false;

            var nextIndex = startIndex + 1;

            // 下一個元素不存在則終止
            if ($(_collection.get(nextIndex)).length == 0) return false;

            setTimeout(function (){
                
                loop(startIndex + 1)
            
            }, _delayTimes)
        }

        loop(0);
    }


}( jQuery ));
