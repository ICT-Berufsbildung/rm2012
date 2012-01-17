<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:attribute-set name="grau">
  <xsl:attribute name="bgcolor">#E0E0E0</xsl:attribute>
</xsl:attribute-set>
<xsl:attribute-set name="gelb">
  <xsl:attribute name="bgcolor">#FFFFD0</xsl:attribute>
</xsl:attribute-set>

<xsl:template match="/">
 <html>
 <head>
 </head>
 <body>
 <table>
  <xsl:apply-templates />
 </table>
 </body>
 </html>
</xsl:template>

<xsl:template match="test">
 <xsl:for-each select="produkt">
  <xsl:choose>
   <xsl:when test="position() mod 2 = 0">
    <xsl:element name="tr" use-attribute-sets="grau">
     <xsl:apply-templates />
    </xsl:element>
   </xsl:when>
   <xsl:otherwise>
    <xsl:element name="tr" use-attribute-sets="gelb">
     <xsl:apply-templates />
    </xsl:element>
   </xsl:otherwise>
  </xsl:choose>
 </xsl:for-each>
</xsl:template>

<xsl:template match="name">
 <td><xsl:value-of select="." /></td>
</xsl:template>

<xsl:template match="preis">
 <td><xsl:value-of select="." /></td>
</xsl:template>

</xsl:stylesheet>