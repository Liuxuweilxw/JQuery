(function () {
    $.fn.extend(
        {
            checkAll : function () {
                this.prop("checked",true)
            },
            uncheackAll : function () {
                this.prop("checked",false)
            },
            checkRev : function () {
                this.each(function () {
                    this.checked = !this.checked
                })
            }
        }
    )
})()