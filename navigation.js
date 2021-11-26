window.onload = function() {
    let navigationMenu = document.createElement('nav');

    navigationMenu.innerHTML = `
        <style>
        .menu{
            list-style-type: none;
        }
        
        nav{
            /* background: red; */
            /* width: 100%; */
            padding: 5px 20px;
            box-shadow: 0 0 8px rgb(165, 164, 164);
            /* position: fixed; */
        }
        
        .menu li a:hover{
            text-decoration: underline;
        }
        
        .menu li{
            font-size: 16px;
            padding: 15px 5px;
        }
        
        .menu li a{
            display: block;
        }
        
        .logo a{
            font-size: 24px;
        }
        
        /* Mobile Menu */
        
        .menu{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
        
        .toggle{
            order: 1;
        }
        .item.button{
            order: 3;
        }
        .item{
            order: 2;
            width: 100%;
            text-align: center;
            display: none;
        }
        
        .item.active{
            display:block;
        }
        
        
        .toggle{
            cursor: pointer;
        }
        
        .bars{
            background: rgb(131, 130, 130);
            display: inline-block;
            height: 2px;
            position: relative;
            width: 18px;
        }
        
        .bars::before, .bars::after{
            background: rgb(131, 130, 130);
            content: "";
            display: inline-block;
            height: 2px;
            position: absolute;
            width: 18px;
        }
        
        .bars::before{
            top: 10px; /*edited line was -5px*/
        }
        
        .bars::after{
            top: 5px;
        }
        
        /* Tablet Menu */
        
        @media all and (min-width: 468px){
            .menu{
                justify-content: center;
            }
        
            .logo{
                flex: 1;
            }
        
            .item.button{
                display: block;
                order: 1;
                width: auto;
            }
        
            .toggle{
                order: 2;
            }
        
            .button a{
                padding: 7px 15px;
                background: hsl(175, 88%, 53%);
                border-radius: 50em;
            }
        }
        
        /*Laptop Menu*/
        
        @media all and (min-width: 768px){
            .item{
                display: block;
                width: auto;
            }
        
            .toggle{
                display: none;
            }
        
            .logo{
                order: 0;
                width: auto;
            }
        
            .item{
                order: 1;
            }
        
            .button{
                order: 2;
            }
        
            .menu li{
                padding: 15px 10px;
            }
        
            .menu li.button{
                padding-right: 0;
            }
        }
        
        </style>
        <ul class="menu">
            <li class="logo"><a href="#">Barely Bearded</a></li>
            <li class="item"><a href="#">Home</a></li>
            <li class="item"><a href="#">About</a></li>
            <li class="item"><a href="https://thepandemicpoet.wordpress.com/">thePandemicPoet</a></li>
            <li class="item button"><a href="#">Sign up</a></li>
            <li class="toggle"><span class="bars"></span></li>
        </ul>
    `;
    console.log(document.body)

    document.body.prepend(navigationMenu);

    console.log("done")
}
