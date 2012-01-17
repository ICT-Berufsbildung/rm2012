<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html>
 <head>
 </head>
 <body>
 <table border="1">
  <xsl:call-template name="Schleife">
    <xsl:with-param name="Zaehler" select="number(/test/start)" />
  </xsl:call-template>
 </table>
 </body>
 </html>
</xsl:template>

<xsl:template name="Schleife">
 <xsl:param name="Zaehler" />
 <xsl:choose>
  <xsl:when test="$Zaehler &lt;= number(/test/ende)">
    <tr>
      <td><xsl:value-of select="$Zaehler" /></td>
      <td><xsl:value-of select="$Zaehler * $Zaehler" /></td>
    </tr>
    <xsl:call-template name="Schleife">
     <xsl:with-param name="Zaehler" select="$Zaehler + 1" />
    </xsl:call-template>
  </xsl:when>
  <xsl:otherwise>
   <xsl:call-template name="Abbruch" />
  </xsl:otherwise>
 </xsl:choose>
</xsl:template>

<xsl:template name="Abbruch">
 <xsl:comment>Schleife beendet!</xsl:comment>
</xsl:template>

</xsl:stylesheet>