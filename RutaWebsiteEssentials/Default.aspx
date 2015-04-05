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

        ul.master_navigation
        {
            font-size: 100%;
            font-weight: bold;
            list-style: none;
            margin: 0.5em 0;
            padding: 0;
        }

        ul.master_navigation li
        {
            display: inline-block;
            padding: 0 0.5%;
            text-decoration:none;            
        }

        a
        {
            color:#ff6a00;
            text-transform:uppercase;
            font-family:Cambria;
            text-decoration:none;
        }

        a:visited
        {
            color: #ff0000;
        }

        a:hover
        {
            color: white;
            border:outset;
            border-width:1px;
            border-radius:5px;
            border-spacing:10px;
            background-color:black;
        }

        p
        {
            text-align: justify;
        }
    </style>

<style type="text/css" media="screen">
    body {
        width:auto;
        max-width: 100%;
        margin: 0;
        padding: 0;
        background:url(images/background.jpg);
    }

    .pad {
        padding: 10px;
    }

    .wrapper{
        max-width:100%;
    }

    .picture{
        float:left;
        max-width:100%;
        width:20%;
        height:auto;
        border: 1px solid;
        margin-left:3%;
        margin-right:7%;
    }

    p.aboutMe{
        font-family:'Cambria Math';
        margin-right:7%;
    }

    h2{
        font-family:Papyrus;
        margin-left:35%;
    }

    .clear{
        clear:both;
    }
</style>

</head>

<body>

<div class="pad">

    <form id="form1" runat="server">

    <div class="header">
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
            <li><a href="project/Home.html" target="_blank">Project</a></li>
        </ul>
        <hr />
    </div>
    <div>
        <h2>Ruta Gadgil</h2>
        <div class="wrapper">
            <img src="images/Ruta Gadgil.jpg" alt="Ruta Gadgil" class="picture" />
            <p class="aboutMe">
                Hi! I'm a Computer Science graduate student at Northeastern University.
                This website is being developed as a part of the Web Development course 
                under the guidance of Prof. Richard Rasala.
            </p>
        </div>
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

<!--</div>-->

</form>

</div>

</body>
</html>