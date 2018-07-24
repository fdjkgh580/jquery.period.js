<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jquery.period.js</title>
    <script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
    <script src="../dist/jquery.period.min.js"></script>
    <style>
        .box {
          width: 800px;
          margin: 0 auto;
        }

        .item {
          float: left;
          width: 70px;
          height: 00px;
          background: #2592a5;
          margin-right: 10px;
          border-radius: 8px;
        }
        .item:last-child {
          margin-right: 0px;
        }

        .start {
          border: 0px;
          padding: 18px 75px;
          font-size: 22px;
          border-radius: 8px;
          display: block;
          margin: 2rem auto;
        }
    </style>
    <script>
        $(function (){
            $(".start").on("click", function (){

                var $this = $(this);
                
                $(".item").period({
                    delayTimes: 200,
                    before: function (){
                        $this.text('Before')
                    },
                    todo: function(index){
                        $this.text(index)

                        $(this).animate({
                            height: '70px'
                        })  
                    },
                    after: function (){
                        $this.text('After').prop('disabled', true)
                    }
                })
            })
        })
    </script>
</head>
<body>
    <button class="start">Start</button>

    <div class="box">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>    
</body>
</html>