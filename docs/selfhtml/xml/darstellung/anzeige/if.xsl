<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html>
 <head>
 </head>
 <body>
 <table border="1">
  <xsl:apply-templates />
 </table>
 </body>
 </html>
</xsl:template>

<xsl:template match="ergebnis">
  <xsl:if test="punkte &gt;= 200">
    <tr>
    <xsl:apply-templates />
    </tr>
  </xsl:if>
</xsl:template>

<xsl:template match="name">
 <td><xsl:value-of select="." /></td>
</xsl:template>

<xsl:template match="punkte">
 <td><xsl:value-of select="." /></td>
</xsl:template>

</xsl:stylesheet>