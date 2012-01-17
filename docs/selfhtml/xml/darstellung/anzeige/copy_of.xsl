<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html>
 <head>
 </head>
 <body>
 <table border="1"><xsl:apply-templates /></table>
 </body>
 </html>
</xsl:template>

<xsl:template match="titel">
<tr><th colspan="3"><xsl:value-of select="." /></th></tr>
</xsl:template>

<xsl:template match="telefon">
<tr>
<td><xsl:copy-of select="../titel" /></td>
<xsl:apply-templates />
</tr>
</xsl:template>

<xsl:template match="name">
<td><xsl:value-of select="." /></td>
</xsl:template>

<xsl:template match="nummer">
<td><xsl:value-of select="." /></td>
</xsl:template>

</xsl:stylesheet>