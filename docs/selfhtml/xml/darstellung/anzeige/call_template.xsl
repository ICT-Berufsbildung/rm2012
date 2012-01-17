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

<xsl:template name="Label">
 <xsl:text>, E-Mail-Adresse: </xsl:text>
</xsl:template>

<xsl:template match="kontakt">
 <div>
 <xsl:value-of select="." />
 <xsl:call-template name="Label" />
 <xsl:value-of select="@mail" />
 </div>
</xsl:template>

</xsl:stylesheet>