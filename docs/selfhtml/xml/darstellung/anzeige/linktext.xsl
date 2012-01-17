<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html><head></head><body bgcolor="#FFFFFF" text="#000000" link="#FF0000" vlink="#AA0000" alink="#000000" style="font-family:Arial; font-size:13px;">
  <xsl:apply-templates />
 </body></html>
</xsl:template>

<xsl:template match="link">
 <a><xsl:attribute name="href"><xsl:value-of select="." /></xsl:attribute>
 <xsl:value-of select="." /></a>
</xsl:template>

</xsl:stylesheet>