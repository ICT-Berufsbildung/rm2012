<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:out="output.xsl">

<xsl:namespace-alias stylesheet-prefix="out" result-prefix="xsl"/>

<xsl:template match="/">
 <out:stylesheet version="1.0">
  <out:template match="/">
   <html><head></head><body>
   <h1><xsl:value-of select="gruss" /></h1>
   <h1><out:text>Hallo Welt - vom Output-Stylesheet</out:text></h1>
   </body></html>
  </out:template>
 </out:stylesheet>
</xsl:template>

</xsl:stylesheet>