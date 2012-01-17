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

<xsl:template match="text">
 <p>
 <xsl:choose>
  <xsl:when test="@ausrichtung='zentriert'">
   <xsl:attribute name="align">center</xsl:attribute>
  </xsl:when>
  <xsl:when test="@ausrichtung='rechts'">
   <xsl:attribute name="align">right</xsl:attribute>
  </xsl:when>
  <xsl:otherwise>
   <xsl:attribute name="align">left</xsl:attribute>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:value-of select="." />
 </p>
</xsl:template>

</xsl:stylesheet>