<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:attribute-set name="sichtbar">
  <xsl:attribute name="border">1</xsl:attribute>
  <xsl:attribute name="cellpadding">3</xsl:attribute>
  <xsl:attribute name="cellspacing">1</xsl:attribute>
</xsl:attribute-set>

<xsl:attribute-set name="unsichtbar">
  <xsl:attribute name="border">0</xsl:attribute>
  <xsl:attribute name="cellpadding">3</xsl:attribute>
  <xsl:attribute name="cellspacing">1</xsl:attribute>
</xsl:attribute-set>

<xsl:template match="/">
 <html>
 <head>
 </head>
 <body>
 <xsl:element name="table" use-attribute-sets="sichtbar">
 <xsl:for-each select="test/eintrag">
 <tr>
  <td valign="top"><b><xsl:value-of select="begriff" /></b></td>
  <td valign="top"><xsl:value-of select="definition" /></td>
 </tr>
 </xsl:for-each>
 </xsl:element>
 </body>
 </html>
</xsl:template>

</xsl:stylesheet>