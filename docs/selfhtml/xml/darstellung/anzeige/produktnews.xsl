<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html><head></head><body style="font-family:Verdana; font-size:24px; color:green">
  <xsl:apply-templates />
 </body></html>
</xsl:template>

<xsl:template match="beschreibung">
 <p style="font-family:Verdana; font-size:13px; color:black">
   <xsl:apply-templates />
 </p>
</xsl:template>

<xsl:template match="hersteller">
 <span style="font-weight:bold; color:red"><xsl:value-of select="." /></span>
</xsl:template>

<xsl:template match="produkt">
 <span style="font-weight:bold; color:blue"><xsl:value-of select="." /></span>
</xsl:template>

<xsl:template match="preis">
 <b><xsl:value-of select="." /></b>
</xsl:template>

</xsl:stylesheet>