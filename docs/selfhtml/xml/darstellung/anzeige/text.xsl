<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html>
 <head>
 </head>
 <body>
  <xsl:apply-templates />
 </body>
 </html>
</xsl:template>

<xsl:template match="behauptung">
 <p><xsl:value-of select="." /></p>
<script type="text/javascript">
 <xsl:text disable-output-escaping="yes">
  &lt;!--
   document.write(&quot;&lt;p&gt;&quot; + document.lastModified + &quot;&lt;/p&gt;&quot;);
  //--&gt;
 </xsl:text>
</script>
</xsl:template>

</xsl:stylesheet>