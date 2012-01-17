<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html>
 <head>
 </head>
 <body>
  <xsl:apply-templates select="test/spruch" />
 </body>
 </html>
</xsl:template>

<xsl:template match="spruch">
 <xsl:variable name="textzuvor">
  <xsl:choose>
   <xsl:when test="position()=1">Erster Eintrag: </xsl:when>
   <xsl:when test="position()=last()">Letzter Eintrag: </xsl:when>
   <xsl:otherwise>Eintrag: </xsl:otherwise>
  </xsl:choose>
 </xsl:variable>
 <p><b><xsl:value-of select="$textzuvor"/></b><br />
 <xsl:value-of select="." /></p>
</xsl:template>

</xsl:stylesheet>