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

<xsl:template match="titel">
 <h1><xsl:value-of select="." /></h1>
</xsl:template>

<xsl:template match="glossar/eintrag">
 <p style="font-family:Arial,Helvetica,sans-serif; font-size:16px">
  <xsl:apply-templates />
 </p>
</xsl:template>

<xsl:template match="begriff">
 <b style="color:blue"><xsl:apply-templates />: </b>
</xsl:template>

<xsl:template match="bedeutung">
  <xsl:value-of select="." />
</xsl:template>

</xsl:stylesheet>