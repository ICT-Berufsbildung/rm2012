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

<xsl:template match="klasse">
  <h3>Klasse <xsl:value-of select="@name" /></h3>
  <p>
  <xsl:for-each select="schueler">
    <xsl:value-of select="." /><br />
  </xsl:for-each>
  </p>
</xsl:template>


</xsl:stylesheet>