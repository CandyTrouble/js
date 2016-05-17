 $(function() {
            $.getJSON(
              'https://api.ipify.org?format=jsonp&callback=?',
              function (data) {
                $(".ipdata").text('{"ip":"' + data.ip + '"}');
                Prism.highlightAll();
              }
            );
          });
