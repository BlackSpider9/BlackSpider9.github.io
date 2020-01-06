var restful = function(){
    var appName = "";//app context
    var baseUrlTemplate = "http://*:8080/";
    var errorData = {"success":false};
    return {
        getBaseUrl:function(){
            var url = baseUrlTemplate.replace("*", document.domain);
            url += appName;
        },
        inseert:function(restUrl, jsonData){
            var ressponseData = undefined;
            $.ajax({
                type: "POST",
                url: restUrl,
                dataType:"json",
                async: false,
                contentType:"application/json;charset=utf-8",
                data:jsonData,
                success:function(data){
                    ressponseData = data;
                },
                error:function(){
                    ressponseData = errorData;
                }
            })
        },
        update:function(restUrl, id, jsonData){
            var ressponseData = undefined;
            $.ajax({
                url: restURL + "/" + id+'/',
                type: 'PUT',
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(json),
                async: false,
                success: function(data) {
                    ressponseData = data;
                },
                error: function(err) {
                    ressponseData = errorData;
                }
            });
            return ressponseData;
        },
        delete:function(restUrl, id){
            var ressponseData = undefined;
            $.ajax({
                type: "DELETE",
                url: restUrl + "/" + id,
                dataType:"json",
                contentType:"application/json;charset=utf-8",
                data:jsonData,
                async: false,
                success:function(data){
                    ressponseData = data;
                },
                error:function(){
                    ressponseData = errorData;
                }
            });
            return ressponseData;
        },
        getByID:function(restURL, id) {
            var ressponseData = undefined;
            $.ajax({
                type: 'get',
                url: restURL + "/" + id,
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                async: false,
                success: function(data) {
                    ressponseData = data;
                },
                error: function(err) {
                    ressponseData = errorData;
                }
            });
            return ressponseData;
        },
    }
}();