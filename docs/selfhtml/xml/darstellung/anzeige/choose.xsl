<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html>
 <head>
 </head>
 <body>
 <h3>Die Zahlen lauten:</h3>
 <xsl:apply-templates />
 </body>
 </html>
</xsl:template>

<xsl:template match="zahl">
<div>
<xsl:value-of select="." />
<xsl:variable name="wert" select="." />
 <xsl:choose>
  <xsl:when test="$wert &lt; 10000">
   <xsl:text> (eine kleine Zahl)</xsl:text>
  </xsl:when>
  <xsl:otherwise>
   <xsl:text> (eine große Zahl)</xsl:text>
  </xsl:otherwise>
 </xsl:choose>
</div>
</xsl:template>

</xsl:stylesheet>