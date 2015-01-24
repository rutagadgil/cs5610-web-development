<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset='utf-8' />

<title>Ruta's Home Page</title>

<style type="text/css">
    ul.master_navigation
    {
        font-size: 100%;
        font-weight: bold;
        text-align: center;
        list-style: none;
        margin: 0.5em 0;
        padding: 0;
    }

    ul.master_navigation li
    {
        display: inline-block;
        padding: 0 0.5%;
    }

    a
    {
        color: #08f;
        font-weight: bold;
        text-decoration: none;
    }

    a:visited
    {
        color: #88f;
    }

    a:hover
    {
        color: #f00;
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
        background:url(background.jpg)
    }

    .pad {
        padding: 10px;
    }

    .wrap{
        vertical-align:top;
        border: 1px solid;
        border-radius:25px;       
    }

    p.aboutMe{
        padding: 4px 7px;
        font-family:'Lucida Calligraphy';
    }

    h2{
        font-family:Papyrus;
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
    <li><a href="experiments/allExperiments.aspx" target="_blank">Experiments</a></li>
</ul>

<hr />

<div>
    <h2>Ruta Gadgil</h2>
    <img src="Ruta Gadgil.jpg" alt="Ruta Gadgil" class="wrap">
    
    <p class="aboutMe">
        Hi! I'm a Computer Science graduate student at Northeastern University.
        This website is being developed as a part of the Web Development course under the guidance of Prof. Richard Rasala.
    </p>
<hr />
</div>
    <br />
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

</div>

</form>

</div>

</body>
</html>
