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

<xsl:template match="link">
 <xsl:number level="single" count="link" format="1. " />
 <a><xsl:attribute name="href"><xsl:value-of select="." /></xsl:attribute>
 <xsl:value-of select="." /></a><br />
</xsl:template>

</xsl:stylesheet>