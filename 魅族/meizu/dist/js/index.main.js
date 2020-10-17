require.config({
    paths:{
        jqurey:'jquery-1.11.3',
        jqcookie:'jquery.cookie',
        index:'index'
    },
    shim:{
        'jqcookie':['jqurey']
    }
})
require(['index'],function(index){
    index.login()
    index.nav()
    index.banner()
    index.indexAjax()
    index.details()
    index.tab()
})