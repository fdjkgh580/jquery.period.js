(function ( $ ) {

    let _total,
        _collection,
        _delayTimes,
        _before,
        _todo,
        _after;

    let _endLoop;

    const loop = (startIndex) => {

        // 取得元素
        var target = _collection.get(startIndex);

        // 執行回呼，當等於 false 將會中斷前往下一個元素
        var result = _todo.call(target, startIndex);

        // 當回傳得到 false 會終止，並觸發 after()
        if (result === false) {
            _endLoop.call(target);
            return false;
        }

        var nextIndex = startIndex + 1;

        // 下一個元素不存在則終止
        if ($(_collection.get(nextIndex)).length == 0) {
            _endLoop.call(target);
            return false;
        }

        setTimeout(() => {
            loop(startIndex + 1)
        }, _delayTimes)
    }


    /**
     * 批次讓元素間隔時間執行
     * @param  {int}        param.delayTimes     延遲的時間
     * @param  {callable}   before               執行前
     * @param  {callable}   todo                 指派動作
     * @param  {callable}   after                結束後
     */
    $.fn.period = function (param){
        
        _total      = $(this).length,
        _collection = $(this),
        _delayTimes = param.delayTimes,
        _before     = param.before,
        _todo       = param.todo,
        _after      = param.after;

        
        // 觸發前
        _before.call(this);

        // 循環觸發
        loop(0);

        // 當 loop 停止的時候觸發 after()
        _endLoop = () => {
            _after.call(this);
        }
    }


}( jQuery ));
