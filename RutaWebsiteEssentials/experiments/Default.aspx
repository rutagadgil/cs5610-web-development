<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset='utf-8' />
    <meta name="viewport" content ="initial-scale=1, minimum-scale=1">

    <title>Ruta Gadgil</title>
    <link rel="icon" href="../images/paint-icon1.ico"/>
    <style type="text/css">

        ul.master_navigation {
            font-size: 100%;
            font-weight: bold;
            list-style: none;
            margin: 2%;
            padding: 0;
            left: auto;
            float: right;
            margin: 2%;
            border: thin;
            height:inherit;
        }

        ul.master_navigation li{
            text-decoration:none;
            padding: 0 0.5%;
        }

        a{
            color: #360c90;
            text-transform:uppercase;
            font-family:Calibri;
            text-decoration:none;
        }
        a:hover{
            color: #360d10;
        }

    body {
        width:auto;
        max-width: 100%;
        margin: 0;
        padding: 0;
        background: url(images/background.jpg);
    }

    .pad {
        padding: 10px;

    }

    .picture{
        float:left;
        max-width:100%;
        height:auto;
        border-radius:25px;
        margin-right:2%;
    }

        .aboutMe{
            width:75%;
            font-family:'Lucida Calligraphy';
            text-align:justify;
            margin-left:2%;
            float:left;
            text-align:justify;
        }
        .picture{
            max-width:100%;
            height:auto;
            border-radius:25px;
        }

    h2{
        font-family:Papyrus;
    }

    .clear{
        clear:both;
    }
        
    </style>

</head>

<body>

<div class="pad">

    <form id="form1" runat="server">

    <div>
        <ul class="master_navigation">
            <li><a href="sitestatistics/" target="_blank">SiteStatistics</a></li>
            <li><a href="statistics/" target="_blank">Statistics</a></li>
            <li><a href="source/" target="_blank">Source</a></li>
            <li><a href="search/" target="_blank">Search</a></li>
            <li><a href="searchtree/" target="_blank">SearchTree</a></li>
            <li><a href="textview/" target="_blank">TextView</a></li>
            <li><a href="filelist.aspx" target="_blank">FileList</a></li>
            <li><a href="autofile.aspx" target="_blank">AutoFile</a></li>
            <li><a href="images/autoimage.aspx" target="_blank">Images</a></li>
            <li><a href="blog/" target="_blank">Blog</a></li>
            <li><a href="story/index.htm?../experiments/story.txt" target="_blank">Experiments</a></li>
        </ul>
        
    </div>
    <div class="aboutMe">
        <img src="../images/Ruta Gadgil.jpg" alt="Ruta Gadgil" class="picture" />
        <p>
            <h2>Ruta Gadgil</h2>
            Hi! Welcome to my website!!
            I'm a Computer Science graduate student at Northeastern University.
            This website is being developed as a part of the Web Development course 
            under the guidance of Prof. Richard Rasala.
        </p>
    </div>

    <div class="clear"></div>
    <br />
    <hr />
    <p>
        Here is a link to the
        <a href="story/index.htm" target="_blank">Story Utility</a>
        on this site so that you may explore this tool.
    </p>
    <p>
        Here is a link to the
        <a href="http://www.northeastern.edu/rasala/webstories.htm"
            target="_blank">Web Development Stories</a>
        so that you may see a good collection of online documentation.
    </p>
</form>

</div>

</body>
</html>